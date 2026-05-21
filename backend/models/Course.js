const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  // title: String,
  // description: String,
  // price: Number,
  // duration: String,   // Example: "6 Weeks"
  // instructor: {
  //   name: String,
  //   qualification: String
  // }
   title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: String, required: true },
  instructor: {
    name: { type: String, required: true },
    qualification: { type: String, required: true }}
});

module.exports = mongoose.model("Course", courseSchema);
