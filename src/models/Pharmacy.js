import { Schema, model } from "mongoose";

const pharmacySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    nameOwner: {
        type: String,
        required: true,
    },
    RUC: {
        type: Number,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    latitude: {
        type: Number,
        required: true,
    },
    length: {
        type: Number,
        required: true,
    },
    phone: {
        type: Number,
        required: true,
    },
    photo: {
        type: String,
        required: true,
    },
    razonSocial: {
        type: String,
        required: true,
    },
}, {
    timestamps: true,
    versionKey: false
})


export default model('Pharmacy', pharmacySchema)