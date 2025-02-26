import express from "express";
import { getOrder } from "../controller/orders/getOrder.controller.js";
import { createOrder } from "../controller/orders/createOrder.controller.js";
import { deleteOrder } from "../controller/orders/deleteOrder.controller.js";
import { updateOrder } from "../controller/orders/updateOrder.controller.js";

export const orderRouter = express.Router();

orderRouter.get("/", getOrder);
orderRouter.post("/", createOrder);
orderRouter.put("/", updateOrder );
orderRouter.delete("/", deleteOrder );