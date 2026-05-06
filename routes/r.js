
    const express = require("express");
    const mongoose = require("mongoose");
    const Product = require("../models/Product");

    const router = express.Router();


    router.post("/products", async (req, res) => {
    try {
        const product = new Product(req.body);
        const saved = await product.save();
        res.status(201).json(saved);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    });


    router.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    });

    router.get("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;

        // check valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID" });
        }

        const product = await Product.findById(id);

        if (!product) {
        return res.status(404).json({ error: "Product not found" });
        }

        res.json(product);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    });

    router.put("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID" });
        }

        const updated = await Product.findByIdAndUpdate(
        id,
        req.body,
        { new: true, runValidators: true }
        );

        if (!updated) {
        return res.status(404).json({ error: "Product not found" });
        }

        res.json(updated);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    });


    router.delete("/products/:id", async (req, res) => {
    try {
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ error: "Invalid ID" });
        }

        const deleted = await Product.findByIdAndDelete(id);

        if (!deleted) {
        return res.status(404).json({ error: "Product not found" });
        }

        res.json({ message: "Product deleted successfully" });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
    });

    module.exports = router;