import { Categories } from "../../models/categories.model.js";

export const updateCategory = async (req, res) => {
    const { id, categoryName } = req.body
    try {
        await Categories.findByIdAndUpdate(id, { categoryName: categoryName }, { new: true })
        console.log("Category updated");
        res.send().status(200)

    } catch (error) {
        res.send().status(400);
        console.log("Error occured ", error);
    }
}