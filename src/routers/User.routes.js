import express from 'express'
import { getUser } from '../controller/users/getUser.controller.js';
import { createUser } from "../controller/users/createUser.controller.js"
import { updateUser } from '../controller/users/updateUser.controller.js';
import { deleteUser } from '../controller/users/deleteUser.controller.js';
import { isValid } from '../middleware/auth/isValid.js';
import { checkEmail } from '../middleware/auth/checkEmail.js';
import { isAdmin } from '../middleware/users/isAdmin.user.js';
import { ValidateUserId } from '../middleware/users/validate.user.id.js';

export const userRouter = express.Router();

// userRouter.get("/", ValidateUserId, isAdmin, getUser);
userRouter.get("/", getUser);
userRouter.post("/", createUser);
userRouter.post("/check", checkEmail)
userRouter.put("/", updateUser);
userRouter.delete("/",ValidateUserId, isAdmin, deleteUser);