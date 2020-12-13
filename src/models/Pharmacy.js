import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';

const pharmacySchema = new Schema({
    razonSocial: {
        type: String,
        required: true,
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
        required: true,
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
        required: true
    },
    longitude: {
        type: Number,
        required: true
    },
    imgURL: {
        type: String,
        required: true
    },
    medicines: [{
        ref: "Medicine",
        type: Schema.Types.ObjectId
    }],
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId,
        autopopulate: true
    }]
}, {
    timestamps: true,
    versionKey: false
});

pharmacySchema.statics.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

pharmacySchema.statics.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

pharmacySchema.plugin(require('mongoose-autopopulate'));

export default model('Pharmacy', pharmacySchema)