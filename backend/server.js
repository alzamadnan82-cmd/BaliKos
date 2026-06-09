const express = require("express");
const cors = require("cors");

const promoRoutes = require("./routes/promoRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/promos", promoRoutes);

app.listen(5000, () => {
    console.log("Server running on port 5000");
});