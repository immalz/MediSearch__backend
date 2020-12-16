"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInPharm = exports.signUpPharms = exports.signIn = exports.signUp = void 0;

var _User = _interopRequireDefault(require("../models/User"));

var _Pharmacy = _interopRequireDefault(require("../models/Pharmacy"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Role = _interopRequireDefault(require("../models/Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var signUp = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, username, email, password, roles, newUser, foundRoles, role, savedUser, token;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;
            _context.t0 = _User["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 6;
            return _User["default"].encryptPassword(password);

          case 6:
            _context.t3 = _context.sent;
            _context.t4 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3
            };
            newUser = new _context.t0(_context.t4);

            if (!roles) {
              _context.next = 16;
              break;
            }

            _context.next = 12;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 12:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 20;
            break;

          case 16:
            _context.next = 18;
            return _Role["default"].findOne({
              name: "user"
            });

          case 18:
            role = _context.sent;
            newUser.roles = [role._id];

          case 20:
            _context.next = 22;
            return newUser.save();

          case 22:
            savedUser = _context.sent;
            console.log(savedUser);
            token = _jsonwebtoken["default"].sign({
              id: savedUser._id
            }, _config["default"].SECRET, {
              expiresIn: 86400 // 24 horas

            });
            res.status(200).json({
              token: token
            });

          case 26:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function signUp(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signUp = signUp;

var signIn = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var userFound, matchPassword, token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              email: req.body.email
            });

          case 2:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).json({
              message: "Usuario no encontrado"
            }));

          case 5:
            _context2.next = 7;
            return _User["default"].comparePassword(req.body.password, userFound.password);

          case 7:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: 'Contraseña invalida'
            }));

          case 10:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, _config["default"].SECRET, {
              expiresIn: 86400
            });
            res.json({
              token: token,
              userFound: userFound
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signIn(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
/* REGISTRO Y LOGIN DE FARMACIAS */


exports.signIn = signIn;

var signUpPharms = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body2, razonSocial, name, nameOwner, email, password, phone, RUC, address, latitude, longitude, imgURL, roles, newPharmacy, foundRoles, role, savedPharmacy, token;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body2 = req.body, razonSocial = _req$body2.razonSocial, name = _req$body2.name, nameOwner = _req$body2.nameOwner, email = _req$body2.email, password = _req$body2.password, phone = _req$body2.phone, RUC = _req$body2.RUC, address = _req$body2.address, latitude = _req$body2.latitude, longitude = _req$body2.longitude, imgURL = _req$body2.imgURL, roles = _req$body2.roles;
            _context3.t0 = _Pharmacy["default"];
            _context3.t1 = razonSocial;
            _context3.t2 = name;
            _context3.t3 = nameOwner;
            _context3.t4 = email;
            _context3.t5 = phone;
            _context3.t6 = RUC;
            _context3.t7 = address;
            _context3.t8 = latitude;
            _context3.t9 = longitude;
            _context3.t10 = imgURL;
            _context3.next = 14;
            return _Pharmacy["default"].encryptPassword(password);

          case 14:
            _context3.t11 = _context3.sent;
            _context3.t12 = {
              razonSocial: _context3.t1,
              name: _context3.t2,
              nameOwner: _context3.t3,
              email: _context3.t4,
              phone: _context3.t5,
              RUC: _context3.t6,
              address: _context3.t7,
              latitude: _context3.t8,
              longitude: _context3.t9,
              imgURL: _context3.t10,
              password: _context3.t11
            };
            newPharmacy = new _context3.t0(_context3.t12);

            if (!roles) {
              _context3.next = 24;
              break;
            }

            _context3.next = 20;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 20:
            foundRoles = _context3.sent;
            newPharmacy.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context3.next = 28;
            break;

          case 24:
            _context3.next = 26;
            return _Role["default"].findOne({
              name: "moderator"
            });

          case 26:
            role = _context3.sent;
            newPharmacy.roles = [role._id];

          case 28:
            _context3.next = 30;
            return newPharmacy.save();

          case 30:
            savedPharmacy = _context3.sent;
            console.log(savedPharmacy);
            token = _jsonwebtoken["default"].sign({
              id: savedPharmacy._id
            }, _config["default"].SECRET, {
              expiresIn: 86400 // 24 horas

            });
            res.status(200).json({
              token: token
            });

          case 34:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function signUpPharms(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.signUpPharms = signUpPharms;

var signInPharm = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var PharmacyFound, matchPassword, token;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Pharmacy["default"].findOne({
              RUC: req.body.RUC
            });

          case 2:
            PharmacyFound = _context4.sent;

            if (PharmacyFound) {
              _context4.next = 5;
              break;
            }

            return _context4.abrupt("return", res.status(400).json({
              message: "Usuario no encontrado"
            }));

          case 5:
            _context4.next = 7;
            return _Pharmacy["default"].comparePassword(req.body.password, PharmacyFound.password);

          case 7:
            matchPassword = _context4.sent;

            if (matchPassword) {
              _context4.next = 10;
              break;
            }

            return _context4.abrupt("return", res.status(401).json({
              token: null,
              message: 'Contraseña invalida'
            }));

          case 10:
            token = _jsonwebtoken["default"].sign({
              id: PharmacyFound._id
            }, _config["default"].SECRET, {
              expiresIn: 86400 // 24 horas

            });
            res.json({
              token: token,
              PharmacyFound: PharmacyFound
            });

          case 12:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function signInPharm(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.signInPharm = signInPharm;