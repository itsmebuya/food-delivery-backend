import mongoose from "mongoose"

const categoriesSchema = new mongoose.Schema({
    categoryName: {type: String, required: true, unique: true}
})

export const Categories = mongoose.model("categories", categoriesSchema);