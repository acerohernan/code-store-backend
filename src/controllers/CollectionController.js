const mongoose = require("mongoose");
const CollectionModel = require("../models/CollectionModel");

const getAllCollections = (req, res) => {
  CollectionModel.find((err, collections) => {
    if (err) res.status(400).send(err.message);

    res.status(200).json(collections);
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

module.exports = { getAllCollections, addCollection };
