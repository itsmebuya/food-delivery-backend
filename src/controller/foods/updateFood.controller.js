import { Foods } from "../../models/foods.model.js"

export const updateFood = async (req, res) => {
    const { id, foodName, price, image, ingredients, categoryId } = req.body
    try {
        await Foods.findByIdAndUpdate(
            id,
            {
                foodName: foodName,
                price: price,
                image: image,
                ingredients: ingredients,
                category: categoryId
            },
            { new: true })
        console.log("food updated");
        res.send().status(200)

    } catch (error) {
        res.send().status(400);
        console.log("Error occured ", error);
    }
}