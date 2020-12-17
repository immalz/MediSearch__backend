import { Schema, model } from "mongoose";

export const TYPES = ['pastilla', 'jarabe', 'pildora', 'crema']

const typeSchema = new Schema({
    name: String,
}, {
    versionKey: false
})

export default model('Type', typeSchema)