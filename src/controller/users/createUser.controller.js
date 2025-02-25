import { Users } from "../../models/users.model.js";
import bcrypt from "bcrypt"

export const createUser = async (req, res) => {
    const {email, password} = req.body;
    const saltRounds = 8;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    try {
        const newUser = await Users.create({
            email: email,
            password: hashedPassword
        })
        res.send(newUser).status(200)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
};