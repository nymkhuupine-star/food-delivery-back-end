const Category = require("../../schemas/categorySchema");

const createCategory = async (req, res) => {
  const { categoryName } = req.body;
  try {
    const category = await Category.create({ categoryName });
    res.status(201).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};

module.exports = createCategory;
