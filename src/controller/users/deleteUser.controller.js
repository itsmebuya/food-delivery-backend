import { Users } from "../../models/users.model.js"

export const deleteUser = async (req, res) => {
    const { id } = req.body
    try {
        await Users.findByIdAndDelete(id)
        // await Users.deleteOne({_id: id})
        res.send().status(200)
    } catch (error) {
        res.send().status(400);
        console.log("Error occured ", error);
    }
}
