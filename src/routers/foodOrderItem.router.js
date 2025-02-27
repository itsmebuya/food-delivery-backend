import express from "express";
import { getFoodOrderItem } from "../controller/foodOrderItems/getFoodOrderItems.controller.js";
import { createFoodOrderItem } from "../controller/foodOrderItems/createFoodOrderItems.controller.js";
import { updateFoodOrderItem } from "../controller/foodOrderItems/updateFoodOrderItems.controller.js";
import { deleteFoodOrderItem } from "../controller/foodOrderItems/deleteFoodOrderItems.controller.js";


export const foodOrderItemRouter = express.Router();

foodOrderItemRouter.get("/", getFoodOrderItem);
foodOrderItemRouter.post("/", createFoodOrderItem );
foodOrderItemRouter.put("/", updateFoodOrderItem );
foodOrderItemRouter.delete("/", deleteFoodOrderItem );