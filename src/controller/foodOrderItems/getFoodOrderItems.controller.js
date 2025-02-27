import { FoodOrderItem } from "../../models/foodOrderItem.model.js";

export const getFoodOrderItem = async (req, res) => {
    try {
        const foodOrderItemData = await FoodOrderItem.find({});
        res.send(foodOrderItemData).status(200)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
}