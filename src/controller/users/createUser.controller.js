import { Users } from "../../models/users.model.js"

export const createUser = async (req, res) => {
    const {name} = req.body
    try {
        const newUser = await Users.create({
            name: name
        })
        res.send(newUser).status(200)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
};