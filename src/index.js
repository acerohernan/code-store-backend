const express = require("express");
const mongoose = require("mongoose");
const productRoutes = require("./routes/product");
require("dotenv").config();

//port
const port = process.env.PORT || 3001;

//app
const app = express();
app.use(express.json());

//routes
app.use("/api/products", productRoutes);

//mongodb connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("Connected to MongoDB Atlas"))
  .catch((error) => console.error(error));

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
