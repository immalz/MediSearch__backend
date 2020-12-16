"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _path = _interopRequireDefault(require("path"));

var _multer = _interopRequireDefault(require("multer"));

var _uuid = require("uuid");

var _middlewares = require("../middlewares");

var medicinesCtrl = _interopRequireWildcard(require("../controllers/medicine.controller"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var router = (0, _express.Router)();

var storage = _multer["default"].diskStorage({
  destination: 'uploads',
  filename: function filename(req, file, cb) {
    cb(null, (0, _uuid.v4)() + _path["default"].extname(file.originalname));
  }
});

var upload = (0, _multer["default"])({
  storage: storage,
  dest: _path["default"].join(__dirname, '../../uploads'),
  limit: {
    fileSize: 2000000
  },
  fileFilter: function fileFilter(req, file, cb) {
    var filetypes = /jpeg|jpg|png|gif/;
    var mimetype = filetypes.test(file.mimetype);
    var extname = filetypes.test(_path["default"].extname(file.originalname));

    if (mimetype && extname) {
      return cb(null, true);
    }

    cb("Error: Tipo de archivo no soportado");
  }
}).single('imgURL'); // CONSULTA MEDICINES

router.post('/:_id', upload, medicinesCtrl.createMedicine); // [authJwt.verifyToken, authJwt.isModerator ],

router.get('/', medicinesCtrl.getMedicines);
router.get('/count', medicinesCtrl.countMedicines);
router.get('/last', medicinesCtrl.lastMedicineAgree);
router.get('/:medicineId', medicinesCtrl.getMedicineById);
router.put('/:medicineId', medicinesCtrl.updateMedicineById); //[authJwt.verifyToken, authJwt.isAdmin]

router["delete"]('/:medicineId', medicinesCtrl.deleteProductById); //
// CONSULTA DE MEDICAMENTOS POR FARMACIA

router.get('/pharmacy/:_id', medicinesCtrl.getMedicinesForPharmacy);
var _default = router;
exports["default"] = _default;