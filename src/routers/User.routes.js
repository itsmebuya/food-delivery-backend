import express from 'express'
import { getUser } from '../controller/users/getUser.controller.js';
import { createUser } from "../controller/users/createUser.controller.js"
import { updateUser } from '../controller/users/updateUser.controller.js';
import { deleteUser } from '../controller/users/deleteUser.controller.js';

export const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/", createUser);
userRouter.put("/", updateUser);
userRouter.delete("/", deleteUser);