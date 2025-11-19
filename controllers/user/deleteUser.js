const UserModel = require("../../schemas/userSchema");

const deleteUser = async (req, res) => {
  const { id } = req.body;
  try {
    const data = await UserModel.findOneAndDelete(id);

    console.log(data);
    res.json("User created successfully");
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

module.exports = deleteUser;
