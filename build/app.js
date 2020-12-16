"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

require("@babel/polyfill");

var _express = _interopRequireDefault(require("express"));

var _morgan = _interopRequireDefault(require("morgan"));

var _cors = _interopRequireDefault(require("cors"));

var _path = _interopRequireDefault(require("path"));

var _package = _interopRequireDefault(require("../package.json"));

var _medicine = _interopRequireDefault(require("./routes/medicine.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _pharm = _interopRequireDefault(require("./routes/pharm.routes"));

var _initialSetup = require("./libs/initialSetup");

var _user = _interopRequireDefault(require("./routes/user.routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

require("regenerator-runtime/runtime");

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();
app.set('pkg', _package["default"]); //cambiar la configuracion cors para produccion

app.use((0, _cors["default"])());
app.use('/uploads', _express["default"]["static"](_path["default"].resolve('uploads')));
app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.get('/', function (req, res) {
  res.json({
    author: app.get('pkg').author,
    name: app.get('pkg').name,
    description: app.get('pkg').description,
    version: app.get('pkg').version,
    scripts: app.get('pkg').scripts
  });
});
app.use('/api/farmacias', _pharm["default"]);
app.use('/api/medicamentos', _medicine["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/usuario', _user["default"]);
var _default = app;
exports["default"] = _default;