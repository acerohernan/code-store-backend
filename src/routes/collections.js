const express = require("express");
const CollectionController = require("../controllers/CollectionController");
const router = express.Router();

router.get("/", CollectionController.getAllCollections);
router.get("/:category", CollectionController.getCollectionByCategory);
router.get("/:category/products", CollectionController.getProductsByCategory);
router.get("/:category/:id", CollectionController.getProductById);
router.post("/", CollectionController.addCollection);

module.exports = router;
