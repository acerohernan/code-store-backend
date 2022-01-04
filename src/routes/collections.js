const express = require("express");
const CollectionController = require("../controllers/CollectionController");
const router = express.Router();

router.get("/", CollectionController.getAllCollections);
router.post("/", CollectionController.addCollection);

module.exports = router;
