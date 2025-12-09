const Food = require("../../schemas/food");

const getFood = async (req, res) => {
  try {
    const foods = await Food.find();
    return res.json(foods);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = getFood;
