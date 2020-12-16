"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkDuplicatedRucOrEmailorRazonSocial = void 0;

var _Request = _interopRequireDefault(require("../models/Request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var checkDuplicatedRucOrEmailorRazonSocial = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
    var RUC, email, razonSocial;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return _Request["default"].findOne({
              RUC: req.body.RUC
            });

          case 3:
            RUC = _context.sent;

            if (!RUC) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'Ya se ha enviado una solicitud con este RUC'
            }));

          case 6:
            _context.next = 8;
            return _Request["default"].findOne({
              email: req.body.email
            });

          case 8:
            email = _context.sent;

            if (!email) {
              _context.next = 11;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'El correo ya se encuentra registrado'
            }));

          case 11:
            _context.next = 13;
            return _Request["default"].findOne({
              razonSocial: req.body.razonSocial
            });

          case 13:
            razonSocial = _context.sent;

            if (!razonSocial) {
              _context.next = 16;
              break;
            }

            return _context.abrupt("return", res.status(400).json({
              message: 'La razon social ya se encuentra registrado'
            }));

          case 16:
            next();
            _context.next = 22;
            break;

          case 19:
            _context.prev = 19;
            _context.t0 = _context["catch"](0);
            res.status(500).json({
              mesasge: _context.t0
            });

          case 22:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 19]]);
  }));

  return function checkDuplicatedRucOrEmailorRazonSocial(_x, _x2, _x3) {
    return _ref.apply(this, arguments);
  };
}();

exports.checkDuplicatedRucOrEmailorRazonSocial = checkDuplicatedRucOrEmailorRazonSocial;