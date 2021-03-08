import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import productRoutes from "./routes/productRoutes.js";
import { notFound, errorHandler} from "./middleware/errorMiddleWare.js"

dotenv.config();
connectDB();

const app = express();

app.get("/", (req, res) => {
  res.send("API IS running...");
});

app.use("/api/products", productRoutes);
const PORT = process.env.PORT || 5000;

app.use(notFound);

app.use(errorHandler);

app.listen(
  PORT,
  console.log(`server running  in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
