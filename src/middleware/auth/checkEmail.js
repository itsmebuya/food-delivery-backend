import { Users } from "../../models/users.model.js";

export const checkEmail = async (req, res) => {
    const { email } = req.body
    try {
        const user = await Users.findOne({email})
        
        if (!user) {
            res.status(200).json({ success: true, message: "Email not found"})
        } else {
            res.json({success:false, message: "Email exist"})
        }
    } catch (error) {
        res.send("Server error (check email)").status(500)
        console.log(error);
    }
}