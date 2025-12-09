const Food = require("../../schemas/food");

const getFoodById = async (req, res) => {
  try {
    const { id } = req.params;
    const food = await Food.findById(id);
    if (!food) return res.status(404).json({ msg: "Food not found" });
    return res.json(food);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

module.exports = getFoodById;
