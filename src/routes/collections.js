const express = require("express");
const CollectionController = require("../controllers/CollectionController");
const router = express.Router();

router.get("/", CollectionController.getAllCollections);
router.get("/:category/:id", CollectionController.getProductById);
router.post("/", CollectionController.addCollection);

module.exports = router;
