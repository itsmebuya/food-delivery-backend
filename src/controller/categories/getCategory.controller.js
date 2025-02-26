import { Categories } from "../../models/categories.model.js";

export const getCategory = async (req, res) => {
    try {
        const categoryData = await Categories.find({});
        res.send(categoryData).status(200)
    } catch (error) {
        res.send().status(400)
        console.log("Error occured ", error);
    }
}