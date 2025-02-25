import mongoose from "mongoose"

const categoriesSchema = new mongoose.Schema({
    categoryName: {type: String, require: true}
})

export const Categories = mongoose.model("categories", categoriesSchema);