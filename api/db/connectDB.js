const mongoose = require("mongoose");

const URI = process.env.MONGO_URI;

const connectDB = async () => {
  await mongoose
    .connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error(err));
};

module.exports = connectDB;
