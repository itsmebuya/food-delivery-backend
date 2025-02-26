import { Orders } from "../../models/orders.model.js";

export const getOrder = async (req, res) => {
    try {
        const orderData = await Orders.find({});
        res.send(orderData).status(200)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
}