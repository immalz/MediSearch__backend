"use strict";

var _app = _interopRequireDefault(require("./app"));

require("./database");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("regenerator-runtime/runtime");

require('dotenv').config();

_app["default"].listen(process.env.PORT);

console.log('Server on port', process.env.PORT);