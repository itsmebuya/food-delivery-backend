import express from "express"
import { getCategory } from "../controller/categories/getCategory.controller.js";
import { createCategory } from "../controller/categories/createCategory.controller.js";
import { updateCategory } from "../controller/categories/updateCategory.controller.js";
import { deleteCategory } from "../controller/categories/deleteCategory.controller.js";

export const categoryRouter = express.Router();

categoryRouter.get("/", getCategory);
categoryRouter.post("/", createCategory );
categoryRouter.put("/", updateCategory );
categoryRouter.delete("/", deleteCategory );