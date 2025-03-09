import mongoose from "mongoose";
import { Users } from "../../models/users.model.js";

export const isAdmin = async (req, res, next) => {
    const { id } = req.body;
    try {
        const user = await Users.findById(new mongoose.Types.ObjectId(id));
        if(user.role == "ADMIN") {
            next()
        } else {
            return res.status(403).json({success: false, message: "Access denied" })
        }
    } catch (error) {
        res.status(500).json({ success: false, message: `error ${error}` })
    }
}