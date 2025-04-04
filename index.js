import express from 'express';
import mongoose from 'mongoose';
import cors from "cors"
import dotenv from "dotenv"
import { userRouter } from './src/routers/User.routes.js';
import { foodRouter } from './src/routers/food.router.js';
import { categoryRouter } from './src/routers/category.router.js';
import { orderRouter } from './src/routers/order.router.js';
import { foodOrderItemRouter } from './src/routers/foodOrderItem.router.js';
import { loginRouter } from './src/routers/login.router.js';
dotenv.config();

const databaseUrl = process.env.DATABASE_URL;
const app = express()
const port = 999;
const connectDB = async () => {
    try {
        await mongoose.connect(databaseUrl)
        console.log("Database connected");
    } catch (error) {
        console.log("Error occured ", error);
    }
}
connectDB();

app.use(express.json())
app.use(cors())

app.use("/users", userRouter)
app.use("/foods", foodRouter)
app.use("/categories", categoryRouter)
app.use("/orders", orderRouter)
app.use("/foodOrderItems", foodOrderItemRouter)
app.use("/login", loginRouter)

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})