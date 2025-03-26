import { Users } from "../../models/users.model.js";
import bcrypt from "bcrypt"

export const createUser = async (req, res) => {
    const {email, password, } = req.body;
    const saltRounds = 8;

    const hashedPassword = await bcrypt.hash(password, saltRounds);
    try {
        await Users.create({
            email: email,
            password: hashedPassword,
        })
        
        res.send("User created").status(201)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
};