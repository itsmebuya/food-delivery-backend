import mongoose from "mongoose"
import { Orders } from "../../models/orders.model.js";

export const validateOrder = async (req, res, next) => {
    const {id} = req.body

    try {
        const order = await Orders.findById(new mongoose.Types.ObjectId(id));
        if(!order) {
            res.status(404).json({success: false, message: "Order doesn't exist"})
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({ success: false, message: `error ${error}` })
    }
}