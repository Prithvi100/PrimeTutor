const mongoose = require("mongoose");
const SubcategorySchema = require("./subcategory");

const CategorySchema = mongoose.Schema(
  {
    category: {
      type: String,
      trim: true,
    },
    sub_category: [SubcategorySchema],
  },
  {
    timestamps: true,
  }
);

const Category = mongoose.model("Category", CategorySchema);

module.exports = Category;
