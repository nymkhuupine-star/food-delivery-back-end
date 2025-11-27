const Food = require("../../schemas/food");

const createFood = async (req, res) => {
  const { foodName, price, image, ingredients, category } = req.body;
  try {
    const food = await Food.create(req.body);
    res.status(201).json(food);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = createFood;
