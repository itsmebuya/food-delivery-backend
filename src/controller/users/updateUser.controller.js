import { Users } from "../../models/users.model.js"

export const updateUser = async (req, res) => {
    const { id, email, address, phoneNumber } = req.body
    try {
        await Users.findOneAndUpdate(
            { id },
            {
                email: email,
                address: address,
                phoneNumber: phoneNumber
            },
            { new: true })
        res.send().status(200)
        console.log("user updated");

    } catch (error) {
        res.send().status(400);
        console.log("Error occured ", error);
    }
}