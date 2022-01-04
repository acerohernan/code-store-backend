const mongoose = require("mongoose");
const CollectionModel = require("../models/CollectionModel");

const getAllCollections = (req, res) => {
  CollectionModel.find((err, collections) => {
    if (err) res.status(400).send(err.message);

    res.status(200).json(collections);
  });
};

const getProductById = (req, res) => {
  const { category, id } = req.params;
  CollectionModel.find({ category }, (err, data) => {
    if (err) res.status(400).send(err.message);
    const { products } = data[0];
    const product = products.find((el) => String(el._id) === id);
    res.status(200).json(product);
  });
};

const addCollection = (req, res) => {
  const { category, products } = req.body;

  const collection = new CollectionModel({
    category,
    products,
  });

  collection.save((err, item) => {
    if (err) res.status(400).send(err.message);

    res.status(200).json(item);
  });
};

module.exports = { getAllCollections, getProductById, addCollection };
