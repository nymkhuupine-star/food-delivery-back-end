const UserModel = require("../../schemas/userSchema");
const bcrypt = require("bcrypt");
const { generateToken } = require("../../middleware/generateToken");
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await UserModel.findOne({ email });

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Нууц үг буруу" });
    } else {
      const token = generateToken(user);
      res.status(200).json({ user: user, token: token });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Серверийн алдаа" });
  }
};

module.exports = loginUser;
