import mongoose from "mongoose"

const usersSchema = new mongoose.Schema({
    email: {type: String, required: true},
    password: {type: String, required: true},
    phoneNumber: {type: Number},
    address: {type:String},
    role: {type:String, required: true, enum: ["USER", "ADMIN"], default: "USER"},
    orderFoods: {type:String},
    ttl: {type: Date },
    isVerified: {type: Boolean, required: true, default: false},
})

export const Users = mongoose.model("users", usersSchema);