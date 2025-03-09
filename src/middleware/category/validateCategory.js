import mongoose from "mongoose"
import { Categories } from "../../models/categories.model.js"

export const validateCategory = async (req, res, next) => {
    const {id} = req.body

    try {
        const category = await Categories.findById(new mongoose.Types.ObjectId(id));
        if(!category) {
            res.status(404).json({success: false, message: "Category doesn't exist"})
        } else {
            next();
        }
    } catch (error) {
        res.status(500).json({ success: false, message: `error ${error}` })
    }
}