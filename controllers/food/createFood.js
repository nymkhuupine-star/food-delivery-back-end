const Food = require("../../schemas/food");

const createFood = async (req, res) => {
  const { dishName, price, image, description, category } = req.body;

  try {
    const food = await Food.create({
      foodName: dishName,        
      price,
      image,
      ingredients: description,   
      category,
    });

    res.status(201).json(food);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = createFood;






