import mongoose from "mongoose"
import { Foods } from "../../models/foods.model.js";

export const validateFood = async (req, res, next) => {
    const {id} = req.body

    try {
        const food = await Foods.findById(new mongoose.Types.ObjectId(id));
        if(!food) {
            res.status(404).json({success: false, message: "Food doesn't exist"})
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({ success: false, message: `error ${error}` })
    }
}