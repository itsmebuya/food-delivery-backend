import mongoose from "mongoose"

const ordersSchema = new mongoose.Schema({
    user: {type: mongoose.Types.ObjectId, require: true, ref: "users"},
    totalPrice: {type: Number},
    foodOrderItems: {type: mongoose.Types.ObjectId, require: true, ref: "foodOrderItem"},
    status: {type: String, require: true, enum: ["PENDING", "CANCELLED", "DELIVERED"], default: "PENDING"},
})

export const Orders = mongoose.model("orders", ordersSchema);