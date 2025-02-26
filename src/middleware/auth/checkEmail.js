import { Users } from "../../models/users.model.js";

export const checkEmail = async (req, res, next) => {
    const { email } = req.body
    try {
        const user = await Users.findOne({email})
        if (!user) {
            next();
        } else {
            res.status(400).json({ success: false, message: "Email exist" })
        }
    } catch (error) {
        res.send("Server error").status(500)
        console.log(error);
    }
}