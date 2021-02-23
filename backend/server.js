import express from "express"
import products from  "./data/products.js"
import dotenv from  "dotenv"

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API IS running...");
});
//to get products
app.get("/api/products", (req, res) => {
  res.json(products);
});

//to get a single product by it's id
app.get("/api/products/:id", (req, res) => {
  const product = products.find((p) => p._id === req.params.id);
  res.json(product);
});

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`server running  in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
