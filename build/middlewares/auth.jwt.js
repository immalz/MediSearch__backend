"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isAdmin = exports.isModerator = exports.verifyTokenByMods = exports.verifyToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _config = _interopRequireDefault(require("../config"));

var _Pharmacy = _interopRequireDefault(require("../models/Pharmacy"));

var _Role = _interopRequireDefault(require("../models/Role"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var verifyToken = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var token, decoded, user;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            token = req.headers.authorization.split(' ')[1];

            if (token) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", res.status(403).json({
              message: "no se ha enviado el token"
            }));

          case 4:
            decoded = _jsonwebtoken["default"].verify(token, _config["default"].SECRET);
            req.AdminId = decoded.id;
            _context.next = 8;
            return _Pharmacy["default"].findById(req.AdminId, {
              password: 0
            });

          case 8:
            user = _context.sent;

            if (user) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(404).json({
              message: 'no se encontró un usuario'
            }));

          case 11:
            next();
            _context.next = 18;
            break;

          case 14:
            _context.prev = 14;
            _context.t0 = _context["catch"](0);
            return _context.abrupt("return", console.log(_context.t0));

          case 18:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 14]]);
  }));

  return function verifyToken(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.verifyToken = verifyToken;

var verifyTokenByMods = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
    var token;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            token = req.headers.authorization.split(' ')[1];

            if (token) {
              _context2.next = 3;
              break;
            }

            return _context2.abrupt("return", res.status(403).json({
              message: "no se ha enviado el token"
            }));

          case 3:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function verifyTokenByMods(_x4, _x5, _x6) {
    return _ref2.apply(this, arguments);
  };
}();

exports.verifyTokenByMods = verifyTokenByMods;

var isModerator = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
    var user, roles, i;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Pharmacy["default"].findById(req.AdminId);

          case 2:
            user = _context3.sent;
            _context3.next = 5;
            return _Role["default"].find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context3.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context3.next = 14;
              break;
            }

            if (!(roles[i].name === "moderator")) {
              _context3.next = 11;
              break;
            }

            next();
            return _context3.abrupt("return");

          case 11:
            i++;
            _context3.next = 7;
            break;

          case 14:
            return _context3.abrupt("return", res.status(403).json({
              message: "require un rol de moderador"
            }));

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function isModerator(_x7, _x8, _x9) {
    return _ref3.apply(this, arguments);
  };
}();

exports.isModerator = isModerator;

var isAdmin = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
    var user, roles, i;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Pharmacy["default"].findById(req.AdminId);

          case 2:
            user = _context4.sent;
            _context4.next = 5;
            return _Role["default"].find({
              _id: {
                $in: user.roles
              }
            });

          case 5:
            roles = _context4.sent;
            i = 0;

          case 7:
            if (!(i < roles.length)) {
              _context4.next = 14;
              break;
            }

            if (!(roles[i].name === "admin")) {
              _context4.next = 11;
              break;
            }

            next();
            return _context4.abrupt("return");

          case 11:
            i++;
            _context4.next = 7;
            break;

          case 14:
            return _context4.abrupt("return", res.status(403).json({
              message: "require un rol de administrador"
            }));

          case 15:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function isAdmin(_x10, _x11, _x12) {
    return _ref4.apply(this, arguments);
  };
}();

exports.isAdmin = isAdmin;