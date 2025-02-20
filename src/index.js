import express from 'express';
import mongoose from 'mongoose';
// import { userRouter } from './routers/user.routes.js';
import { userRouter } from './routers/User.routes.js';


const url = "mongodb+srv://itsmebuya:iz6sl4GPugIQBJX3@cluster0.42tlq.mongodb.net/test?retryWrites=true&w=majority&appName=Cluster0"

const connectDB = async () => {
    await mongoose.connect(url)
    try {
        console.log("success");

    } catch (error) {
        console.log("Error occured ", error);
    }
}
connectDB();

const app = express()
const port = 3000;
app.use(express.json())

app.use("/users", userRouter )

app.listen(port, () => {
    console.log(`example app listening on port ${port}`)
})