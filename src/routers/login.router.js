import express from "express";
import { loginAuthentication } from "../controller/login/authentication.js";

export const loginRouter = express.Router();

loginRouter.post("/", loginAuthentication);
