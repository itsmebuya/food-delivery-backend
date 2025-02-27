import mongoose from "mongoose"

const foodsSchema = new mongoose.Schema({
    foodName: {type: String, required: true},
    price: {type: Number, required: true},
    image: {type: String},
    ingredients: {type:String, required: true},
    category: {type: mongoose.Types.ObjectId, required: true, ref: "categories"},
})

export const Foods = mongoose.model("foods", foodsSchema);