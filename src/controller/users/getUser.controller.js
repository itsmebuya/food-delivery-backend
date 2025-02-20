import { Users } from "../../models/users.model.js";

export const getUser = async (req, res) => {
    try {
        const userData = await Users.find({});
        res.send(userData).status(200)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
}