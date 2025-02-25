import { Users } from "../../models/users.model.js"

export const updateUser = async (req, res) => {
    const { id } = req.body
    try {
        await Users.findByIdAndUpdate( id, { $set: { name: "lebron" } })
        res.send().status(200)
        console.log("updated");

    } catch (error) {
        res.send().status(400);
        console.log("Error occured ", error);
    }
}