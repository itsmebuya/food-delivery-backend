import { Users } from "../../models/users.model.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const loginAuthentication = async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await Users.find(u => u.email === email);

        if (!user) {
            res.status(400).json({ success: false, message: "Account not found" })
        } else {
            const match = await bcrypt.compare(password, user.password);
            const decodePass = "123";
            if (match) {
                const token = jwt.sign({
                    exp: Math.floor(Date.now() / 1000) + 60 * 60, date: user
                }, decodePass);
                res.status(200).json({ success: true, message: "logged in", token: token });
            } else {
                res.status(400).json({ success: false, message: "password incorrect" })
            }
        }
    } catch (error) {
        res.send("Server error").status(500)
        console.log(error);
    }
}