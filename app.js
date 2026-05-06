    const express = require("express");

    const productRoutes = require("./routes/r.js");

    const app = express();
    const connectDB = require('./CONFIG/DB');

    app.use(express.json());

    app.use("/api", productRoutes);

    connectDB();
    const PORT = 5000;
    app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });