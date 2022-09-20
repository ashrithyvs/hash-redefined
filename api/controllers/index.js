const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDB = mongoose.createConnection(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = {
  project: require("./project.controller.js")(connectDB),
};
