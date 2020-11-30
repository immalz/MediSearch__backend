import { Schema, model } from "mongoose";

const pharmacySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    direction: {
        type: String,
        required: true,
        unique: true
    },
}, {
    versionKey: false
})


export default model('Pharmacy', pharmacySchema)