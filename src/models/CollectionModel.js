const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema(
  {
    name: { type: String, required: true },
    price: { type: Number, required: true },
    stars: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
  },
  { versionKey: false }
);

const CollectionSchema = new Schema(
  {
    category: { type: String, required: true },
    products: {
      type: [ProductSchema],
      required: true,
    },
  },
  { versionKey: false }
);

const Collection = mongoose.model("Collection", CollectionSchema);

module.exports = Collection;
