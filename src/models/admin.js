import { Schema, model } from "mongoose";
import bcrypt from 'bcryptjs';
const AdminSchema = new Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },

    password: {
        type: String,
        required: true
    },
    roles: [{
        ref: "Role",
        type: Schema.Types.ObjectId,
        autopopulate: true
    }]
}, {
    timestamps: true,
    versionKey: false
});

AdminSchema.statics.encryptPassword = async(password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
}

AdminSchema.statics.comparePassword = async(password, receivedPassword) => {
    return await bcrypt.compare(password, receivedPassword);
}

AdminSchema.plugin(require('mongoose-autopopulate'));

export default model('Admin', AdminSchema);