"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var RquestSchema = new _mongoose.Schema({
  razonSocial: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  nameOwner: {
    type: String,
    required: true
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
    required: true
  },
  RUC: {
    type: Number,
    required: true,
    unique: true
  },
  address: {
    type: String,
    required: true
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
  }
}, {
  timestamps: true,
  versionKey: false
});

var _default = (0, _mongoose.model)('Request', RquestSchema);

exports["default"] = _default;