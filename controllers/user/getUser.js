const UserModel = require("../../schemas/userSchema");

const getUser = async (req, res) => {
  const { id } = req.body;
  console.log(id, "ididi");
  try {
    const data = await UserModel.findById(id);
    console.log("data", data);
    res.json(data);
  } catch (err) {
    console.error(err);
    res.json(err);
  }
};

module.exports = getUser;
