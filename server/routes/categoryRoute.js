const express = require("express");
const Router = express.Router();
const Category = require("../models/category");
const categories = [
  "Essay Editing",
  "SAT Math",
  "SAT Reading/Writing",
  "ACT",
  "MCAT",
  "TOEFL",
  "UI/UX Design",
  "Microeconomics",
  "Macroeconomics",
  "Econometrics",
  "Business Finance",
  "Neuroscience",
  "Business Law",
  "Spanish",
  "French",
  "Italian",
  "Chinese",
  "AP Economics(Micro and Macro)",
  "AP Computer Science",
  "AP Statistics",
  "AP Chemistry",
  "AP Biology",
  "AP Calculus BC",
  "AP Physics",
  "AP English Language",
  "AP English Literature",
  "Linear Algebra",
  "Calculus 2",
  "Calculus 3",
  "Physics-High School",
  "Physics-College",
  "Coding/Engineering",
  "Excel",
  "Financial Accounting",
  "Managerial Accounting",
  "Nutrition Coaching",
  "Weight Trianing",
  "Meditation",
  "Public Speaking",
  "Cinematography",
  "Video editing",
  "Screenwriting",
  "Social Media Marketing/Growth",
];

Router.get("/add-categories", async (req, res) => {
  try {
    // const { subject_name } = req.body;
    for (let i = 0; i < categories.length; i++) {
      // const subject = await Category.find({ category: categories[i] });
      // if (subject) {
      //   return res
      //     .status(400)
      //     .send("Subject name already exist. Please choose another name.");
      // }
      const category = new Category({
        category: categories[i],
      });
      await category.save();
    }

    return res.send({
      success: true,
    });
  } catch (error) {}
});

Router.get("/categories", async (req, res) => {
  try {
    const categories = await Category.find({}).populate("");
    res.send(categories);
  } catch (error) {
    console.log({ error });
  }
});

module.exports = Router;
