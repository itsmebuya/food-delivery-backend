import { FoodOrderItem } from "../../models/foodOrderItem.model.js"

export const deleteFoodOrderItem = async (req, res) => {
    const { foodOrderItemId } = req.body
    try {
        await FoodOrderItem.findByIdAndDelete(foodOrderItemId)
        res.send().status(200)
    } catch (error) {
        res.send().status(400);
        console.log("Error occured ", error);
    }
}
