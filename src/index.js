const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const productRoutes = require("./routes/product");
const collectionRoutes = require("./routes/collections");
require("dotenv").config();

//port
const port = process.env.PORT || 3001;

//app
const app = express();
app.use(express.json());

//cors
app.use(cors());

//routes
app.use("/api/products", productRoutes);
app.use("/api/collections", collectionRoutes);

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
