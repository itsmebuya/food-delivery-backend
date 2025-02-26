import { Foods } from "../../models/foods.model.js"

export const getFood = async (req, res) => {
    try {
        const foodData = await Foods.find({});
        res.send(foodData).status(200)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
}