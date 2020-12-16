"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var authCtrl = _interopRequireWildcard(require("../controllers/auth.controllers"));

var pharmCtrl = _interopRequireWildcard(require("../controllers/pharm.controller"));

var _middlewares = require("../middlewares");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var router = (0, _express.Router)();
router.get('/', pharmCtrl.getPharms);
router.get('/count', pharmCtrl.countPharms);
router.get('/last', pharmCtrl.lastPharmAgree);
router.get('/:id', pharmCtrl.getPharmById);
router.get('/request/count', pharmCtrl.countRequestPharms);
router.get('/request', pharmCtrl.getRequestPharms); // [authJwt.verifyToken, authJwt.isAdmin]

router.get('/medicine/count/:_id', pharmCtrl.countMedicineforPharm);
router.post('/', [_middlewares.verifySignup.checkDuplicatedUsernameOrEmail, _middlewares.verifySignup.checkRolesExisted], authCtrl.signUpPharms);
router.post('/request', _middlewares.verifyRequest.checkDuplicatedRucOrEmailorRazonSocial, pharmCtrl.createRequestPharms);
router.put('/:pharmId', pharmCtrl.updatePharmacyById);
router["delete"]('/:pharmId', pharmCtrl.deletePharm);
router["delete"]('/request/:pharmId', pharmCtrl.deleteRequestPharms); // , [authJwt.verifyToken, authJwt.isAdmin]

var _default = router;
exports["default"] = _default;