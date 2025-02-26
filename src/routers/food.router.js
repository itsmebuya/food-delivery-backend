import express from "express";
import { getFood } from "../controller/foods/getFood.controller.js"
import { createFood } from "../controller/foods/createFood.controller.js";
import { updateFood } from "../controller/foods/updateFood.controller.js";
import { deleteFood } from "../controller/foods/deleteFood.controller.js";

export const foodRouter = express.Router();

foodRouter.get("/", getFood);
foodRouter.post("/", createFood);
foodRouter.put("/", updateFood);
foodRouter.delete("/", deleteFood);