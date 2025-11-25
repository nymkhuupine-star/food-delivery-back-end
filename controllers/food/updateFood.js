const { default: Food } = require("../../models/food");

const updateFood = async (req, res) => {
  try {
    const { id } = req.params;

    const food = await Food.findByIdAndUpdate(id, req.body, { new: true });

    if (!food) {
      return res.status(404).json({ message: "Food not found" });
    }

    res.status(200).json({ message: "Food update successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
module.exports = updateFood;
