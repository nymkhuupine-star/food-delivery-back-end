const { default: Food } = require("../../models/food");

const getFood = async (req, res) => {
  try {
    const { id } = req.params;

    const food = await Food.findById(id).populate("category");

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json(food);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
module.exports = getFood;
