const mongoose = require("mongoose");
const ProductModel = require("../models/ProductModel");

const getAllProducts = (req, res) => {
  ProductModel.find((err, products) => {
    if (err) res.status(400).send(err.message);

    res.status(200).json(products);
  });
};

const getProductById = (req, res) => {
  ProductModel.findById(req.params.id, (err, product) => {
    if (err) res.status(400).send(err.message);

    res.status(200).json(product);
  });
};

const getProductByCategory = (req, res) => {
  const category = req.params.category;
  ProductModel.find({ category }, (err, products) => {
    if (err) res.status(400).send(err.message);

    res.status(200).json(products);
  });
};

const addProduct = (req, res) => {
  const { name, price, stars, description, image, category } = req.body;
  let product = new ProductModel({
    name,
    price,
    stars,
    description,
    image,
    category,
  });
  product.save((err, item) => {
    if (err) res.status(400).send(err.message);

    res.status(200).json(item);
  });
};

const editProduct = (req, res) => {
  const id = req.params.id;
  const { name, price, stars, description, image, category } = req.body;

  ProductModel.updateOne(
    { id },
    { name, price, stars, description, image, category },
    (err, product) => {
      if (err) res.status(400).send(err.message);
      res.status(200).json(product);
    }
  );
};

const removeProduct = (req, res) => {
  const id = req.params.id;

  ProductModel.deleteOne({ _id: id }, (err, item) => {
    if (err) res.status(400).send(err.message);

    res.status(200).json(item);
  });
};

module.exports = {
  getAllProducts,
  getProductById,
  getProductByCategory,
  addProduct,
  editProduct,
  removeProduct,
};
