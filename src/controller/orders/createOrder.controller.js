import { Orders } from "../../models/orders.model.js";

export const createOrder = async (req, res) => {
    const { user, totalPrice, foodOrderItems, status } = req.body;
    try {
        await Orders.create({
            user: user,
            totalPrice: totalPrice,
            foodOrderItems: foodOrderItems,
            status: status
        })
        res.send("Category created").status(201)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
};