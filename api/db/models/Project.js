const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  title: {
    required: true,
    type: String,
  },
  images: {
    type: Array,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  redirectURL: {
    type: String,
  },
});

const Project = mongoose.model("projects", projectSchema);

module.exports = Project;
