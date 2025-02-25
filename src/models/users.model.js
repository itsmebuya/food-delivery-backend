import mongoose from "mongoose"

const usersSchema = new mongoose.Schema({
    email: {type: String, require: true},
    password: {type: String, require: true},
    phoneNumber: {type: Number},
    address: {type:String},
    role: {type:String, require: true, enum: ["USER", "ADMIN"], default: "USER"},
    orderFoods: {type:String},
    ttl: {type: Date },
    isVerified: {type: Boolean},
})

export const Users = mongoose.model("users", usersSchema);