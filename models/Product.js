/*Problem 4: MongoDB + Mongoose CRUD API
Task:
Create a backend using MongoDB and Mongoose.
Schema: Product
{
"name": String,
"price": Number,
"inStock": Boolean
}
APIs:
● POST /products → Insert product
● GET /products → Fetch all
● GET /products/:id → Fetch one
● PUT /products/:id → Update
● DELETE /products/:id → Delete
Requirements:
● Use Mongoose schema & model
● Handle errors (invalid ID, not found)
● Use async/await*/

    const mongoose = require("mongoose");

    const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    inStock: {
        type: Boolean,
        default: true
    }
    }, { timestamps: true });

    module.exports = mongoose.model("Product", productSchema);