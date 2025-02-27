import { FoodOrderItem } from "../../models/foodOrderItem.model.js";

export const createFoodOrderItem = async (req, res) => {
    const { foodId, quantity } = req.body;
    try {
        await FoodOrderItem.create({
            foodName: foodId,
            quantity: quantity
        })
        res.send("Food order item created").status(201)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
};