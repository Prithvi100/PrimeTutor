const mongoose = require("mongoose");

const SubjectSchema = mongoose.Schema(
  {
    sub_category: {
      type: String,
      trim: true,
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = SubjectSchema;
