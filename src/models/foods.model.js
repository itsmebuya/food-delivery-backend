import mongoose from "mongoose"

const foodsSchema = new mongoose.Schema({
    foodName: {type: String, require: true},
    price: {type: Number, require: true},
    image: {type: String},
    ingredients: {type:String},
    category: {type: mongoose.Types.ObjectId,  ref: "categories"},
})

export const Foods = mongoose.model("foods", foodsSchema);