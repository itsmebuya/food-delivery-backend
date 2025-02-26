import { Categories } from "../../models/categories.model.js"

export const deleteCategory = async (req, res) => {
    const { id } = req.body
    try {
        await Categories.findOneAndDelete({id})
        res.send().status(200)
    } catch (error) {
        res.send().status(400);
        console.log("Error occured ", error);
    }
}
