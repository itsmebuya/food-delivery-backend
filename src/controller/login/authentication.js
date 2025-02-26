import { Users } from "../../models/users.model.js";
import bcrypt from "bcrypt"

export const loginAuthentication = async (req, res, next) => {
    const { email, password } = req.body
    try {
        const user = await Users.find(u => u.email === email);
        const match = await bcrypt.compare(password, user.password);
        if (match) {
            res.status(201).json({ success: true, message: "password matched" })
            next();
        } else {
            res.status(400).json({ success: false, message: "password incorrect" })
        }
    } catch (error) {
        res.send("Server error").status(500)
        console.log(error);
    }
}