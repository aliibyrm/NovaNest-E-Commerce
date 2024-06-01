const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const app = express();
const cors = require("cors");
const logger = require("morgan");
const mainRoute = require("./routes/index.js");
const port = 8080;

dotenv.config();
// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(cors());
const connect = async () => {
  try {
    // await mongoose.connect('mongodb+srv://alibayram:Bakircay.142536@mern-e-commerce.wb6z5li.mongodb.net/mern-e-commerce');
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoDb");
  } catch (error) {
    throw error;
  }
};

app.use("/api", mainRoute);

app.listen(port, () => {
  connect();
  console.log(`Sunucu ${port} portunda çalışıyor.`);
});
