import express from 'express'
import { getUser } from '../controller/users/getUser.controller.js';
import { createUser } from "../controller/users/createUser.controller.js"
import { updateUser } from '../controller/users/updateUser.controller.js';
import { deleteUser } from '../controller/users/deleteUser.controller.js';
import { isValid } from '../middleware/auth/isValid.js';
import { checkEmail } from '../middleware/auth/checkEmail.js';

export const userRouter = express.Router();

userRouter.get("/", getUser);
userRouter.post("/", isValid, checkEmail, createUser);
userRouter.put("/", updateUser);
userRouter.delete("/", deleteUser);