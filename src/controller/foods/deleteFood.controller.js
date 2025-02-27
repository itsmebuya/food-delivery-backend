import { Foods } from "../../models/foods.model.js"

export const deleteFood = async (req, res) => {
    const { id } = req.body
    try {
        await Foods.findByIdAndDelete(id)
        res.send().status(200)
    } catch (error) {
        res.send().status(400);
        console.log("Error occured ", error);
    }
}
