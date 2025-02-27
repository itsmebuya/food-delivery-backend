import { Orders } from "../../models/orders.model.js"

export const deleteOrder = async (req, res) => {
    const { id } = req.body
    try {
        await Orders.findByIdAndDelete(id)
        res.send().status(200)
    } catch (error) {
        res.send().status(400);
        console.log("Error occured ", error);
    }
}
