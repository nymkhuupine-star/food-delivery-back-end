const UserModel = require("../schemas/userSchema");

const isEmailExist = async (req, res, next) => {
  const { email } = req.body;
  console.log("email", email);
  if (!email) {
    res.status(404).json("Email Required");
  }
  const user = await UserModel.findOne({ email: email });
  if (!user) {
    next();
  } else {
    res.status(404).json("User found");
  }
};
module.exports = isEmailExist;
