const express = require("express");
const ProductController = require("../controllers/ProductController");

const router = express.Router();

router.get("/", ProductController.getAllProducts);
router.get("/:id", ProductController.getProductById);
router.get("/category/:category", ProductController.getProductByCategory);
router.post("/", ProductController.addProduct);
router.put("/:id", ProductController.editProduct);
router.delete("/:id", ProductController.removeProduct);

module.exports = router;
