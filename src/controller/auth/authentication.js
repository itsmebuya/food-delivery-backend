import { Users } from "../../models/users.model.js";
import bcrypt from "bcrypt"

export const loginAuthentication = async (req, res, next) => {
    const {email, password} = req.body
    const user = Users.find(u => u.email === email);
    const match = await bcrypt.compare(password, user.password);
    try {
        if(match) {
            res.send().status(200)
            next();
        } else {

        }
        

    } catch (error) {
        res.send("Server error").status(500)
        console.log(error);
    }
}