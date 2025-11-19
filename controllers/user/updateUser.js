const UserModel = require("../../schemas/userSchema");

const putUser = async (req, res) => {
  const { id, firstName, email, password, address, phoneNumber } = req.body;

  try {
    const data = await UserModel.findByIdAndUpdate(
      id,
      { firstName, email, password, address, phoneNumber },
      { new: true }
    );

    if (!data) {
      return res.status(404).json(`User not found`);
    }

    return res.status(200).json(`user updated: ${data}`);
  } catch (err) {
    return res.status(500).json(`Something went wrong: ${err}`);
  }
};

module.exports = putUser;
