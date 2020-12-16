"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _multer = _interopRequireDefault(require("multer"));

var _path = _interopRequireDefault(require("path"));

var _uuid = require("uuid");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Settings
var storage = _multer["default"].diskStorage({
  destination: _path["default"].join(__dirname, '../public/images'),
  filename: function filename(req, file, cb) {
    cb(null, (0, _uuid.v4)() + _path["default"].extname(file.originalname));
  }
});

var _default = (0, _multer["default"])({
  storage: storage
});

exports["default"] = _default;