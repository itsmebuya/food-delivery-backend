import { FoodOrderItem } from "../../models/foodOrderItem.model.js"

export const updateFoodOrderItem = async (req, res) => {
    const { foodOrderItemId, quantity } = req.body
    try {
        await FoodOrderItem.findByIdAndUpdate(
            foodOrderItemId,
            {
                quantity: quantity,
            },
            { new: true })
        console.log("food order item updated");
        res.send().status(200)

    } catch (error) {
        res.send().status(400);
        console.log("Error occured ", error);
    }
}