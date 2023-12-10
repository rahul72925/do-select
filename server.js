import express from "express";
import { productRouter } from "./entities/products/routes.js";

const app = express();

app.use("/api/products", productRouter);

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

export default app; // Export the app for testing
