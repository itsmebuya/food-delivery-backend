import { Categories } from "../../models/categories.model.js";

export const createCategory = async (req, res) => {
    const { categoryName } = req.body;
    try {
        await Categories.create({
            categoryName: categoryName
        })
        res.send("Category created").status(201)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
};