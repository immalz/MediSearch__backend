import { Schema, model } from "mongoose";

const RquestSchema = new Schema({
    razonSocial: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
    },
    nameOwner: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
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
    latitude: {
        type: Number,
        required: true,
    },
    longitude: {
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
});


export default model('Request', RquestSchema);