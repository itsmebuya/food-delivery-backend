import { Foods } from "../../models/foods.model.js";

export const createFood = async (req, res) => {
    const {foodName, price, image, ingredients, categoryId} = req.body;
    console.log(req.body)
    console.log(categoryId)
    try {
        await Foods.create({
            foodName: foodName,
            price: price,
            image: image,
            ingredients: ingredients,
            category: categoryId
        })
        res.send("Food created").status(201)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
};