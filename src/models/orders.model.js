import mongoose from "mongoose"

const ordersSchema = new mongoose.Schema({
    user: {type: mongoose.Types.ObjectId, required: true, ref: "users"},
    totalPrice: {type: Number},
    foodOrderItems: {type: mongoose.Types.ObjectId, required: true, ref: "foodOrderItem"},
    status: {type: String, required: true, enum: ["PENDING", "CANCELLED", "DELIVERED"], default: "PENDING"},
})

export const Orders = mongoose.model("orders", ordersSchema);