import mongoose from "mongoose";

const { Schema, model} = mongoose
const required = true

const creditSchema = new Schema({
    creator:  { type: String, required},
    link: { type: String, required},
    type: {type: String, required},
    project: { type: String}
    
})

const Credit = model("credit", creditSchema)

export default Credit