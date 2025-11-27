const mongoose = require("mongoose");

const foodSchema = new mongoose.Schema(
  {
    foodName: {
      type: String,
    },
    price: {
      type: Number,
    },
    image: {
      type: String,
    },
    ingredients: {
      type: String,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
    },
  },
  { timestamps: true }
);

const Food = mongoose.model("Food", foodSchema);
module.exports = Food;
