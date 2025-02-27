import { Orders } from "../../models/orders.model.js"

export const updateOrder = async (req, res) => {
    const { id, foodOrderItems, status } = req.body
    try {
        await Orders.findByIdAndUpdate(
            id,
            {
                foodOrderItems: foodOrderItems,
                status: status
            },
            { new: true })
        res.send().status(200)
        console.log("order updated");

    } catch (error) {
        res.send().status(400);
        console.log("Error occured ", error);
    }
}