require("dotenv").config();

const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const connectDB = require("./db/connectDB");
const app = express();

app.use(cors());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json({ extended: true, limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

connectDB();

const PORT = 5001 || process.env.PORT;

require("./routes")(app);

app.use(function (req, res) {
  res.status(400).send({ error: "Route not found" });
});

app.listen(PORT, () => {
  console.log(`Server is listening on: http://localhost:${PORT}`);
});
