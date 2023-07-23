const mongoose = require("mongoose")

const ProductModel = mongoose.model("products", {
    img: { type: String },
    category: { type: String },
    Brand: { type: String },
    model: { type: String },
    price: { type: Number},
    rating: { type: Number},
    description: { type: String }

})
module.exports = ProductModel