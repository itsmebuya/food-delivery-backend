import mongoose from "mongoose";
import { Users } from "../../models/users.model";

export const ValidateUserId = async (req, res, next) => {
    const { id } = req.body;
    try {
        if (!id) {
            res.status(404).json({ success: false, message: "Invalid input" })
        } else {
            const user = await Users.findById(new mongoose.Types.ObjectId(id));
            if (!user) {
                res.status(404).json({ success: false, message: "Not found by id" })
            }
            else {
                next();
            }
        }
    } catch (error) {
        res.status(500).json({ success: false, message: `error ${error}` })
    }
}