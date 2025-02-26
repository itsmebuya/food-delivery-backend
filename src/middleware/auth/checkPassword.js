import { Users } from "../../models/users.model.js";

export const checkPassword = async (req, res, next) => {
    const { email, password } = req.body
    try {
        // const user = await Users.find({email: email})
        // user.password
        // next()
    } catch (error) {
        res.send("Server error").status(500)
        console.log(error);
    }
}