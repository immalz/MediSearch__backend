import { Schema, model } from 'mongoose';

const medicineSchema = new Schema({
    name: String,
    category: String,
    company: String,
    type: String,
    price: Number,
    imgURL: String
}, {
    timestamps: true,
    versionKey: false
})


export default model('Medicine', medicineSchema);