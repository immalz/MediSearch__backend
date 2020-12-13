import { Schema, model } from 'mongoose';

const medicineSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    company: {
        ref: "Pharmacy",
        type: Schema.Types.ObjectId,
        required: true
    },
    type: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    imgURL: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
    versionKey: false
})



export default model('Medicine', medicineSchema);