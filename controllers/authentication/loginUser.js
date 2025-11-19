const UserModel = require("../../schemas/userSchema");
const bcrypt = require("bcrypt");

const loginUser = async (req, res) => {
  const { password } = req.body;
  const { user } = req;

  try {
    // const user = await UserModel.findOne(email);
    const hashedPassword = user.password;
    const isPasswordWatching = bcrypt.compare(password, hashedPassword);

    if (!isPasswordWatching) {
      res.status(404).json(`something went wrong: ${err}`);
    }

    console.log("isPasswordWatching", isPasswordWatching);

    res.status(200).json(`user: hello`);
  } catch (err) {
    res.status(500).json(`something went wrong: ${err}`);
  }
};

module.exports = loginUser;
