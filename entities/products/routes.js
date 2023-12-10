import express from "express";
import { getProduct, getProducts } from "./controller.js";

const productRouter = express.Router();

productRouter.get("/", getProducts);
productRouter.get("/:id", getProduct);

export { productRouter };
