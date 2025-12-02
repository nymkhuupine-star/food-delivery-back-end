const Category = require("../../schemas/categorySchema");

const getCategory = async (req, res) => {
  try {
    const category = await Category.find();

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json(category);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: err.message });
  }
};
module.exports = getCategory;
