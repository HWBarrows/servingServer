import mongoose from "mongoose";

const { Schema, model} = mongoose
const required = true

const messageSchema = new Schema({
    name:  { type: String, required},
    email: { type: String, required},
    message: {type: String, required},
    
}, { timestamps: true})

const Message = model("message", messageSchema)

export default Message