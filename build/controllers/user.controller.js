"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.countUsers = exports.lastUserAgree = exports.deleteUser = exports.updateUserById = exports.getUsers = exports.getUserById = exports.createUser = void 0;

var _User = _interopRequireDefault(require("../models/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var createUser = function createUser(req, res) {
  res.json('creando usuario');
};

exports.createUser = createUser;

var getUserById = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var Userasd;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _User["default"].findById(req.params.id);

          case 2:
            Userasd = _context.sent;
            res.status(200).json(Userasd);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getUserById(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getUserById = getUserById;

var getUsers = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var Users;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].find();

          case 2:
            Users = _context2.sent;
            res.status(200).json(Users);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getUsers(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getUsers = getUsers;

var updateUserById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, username, email, phone, address, imgURL, myquery, updatedUser;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, phone = _req$body.phone, address = _req$body.address, imgURL = _req$body.imgURL;
            myquery = {
              _id: req.params.id
            };
            _context3.next = 4;
            return _User["default"].updateOne(myquery, {
              username: username,
              email: email,
              phone: phone,
              address: address,
              imgURL: imgURL
            }, {
              "new": true
            });

          case 4:
            updatedUser = _context3.sent;
            res.status(200).json({
              message: updatedUser
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateUserById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updateUserById = updateUserById;

var deleteUser = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var UserId, UserDelete;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            UserId = req.params.UserId;
            _context4.next = 3;
            return _User["default"].findByIdAndDelete(UserId);

          case 3:
            UserDelete = _context4.sent;
            res.status(200).json({
              UserDelete: UserDelete
            });

          case 5:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.deleteUser = deleteUser;

var lastUserAgree = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var lastUser;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _User["default"].find().sort({
              $natural: -1
            }).limit(1);

          case 2:
            lastUser = _context5.sent;
            res.status(200).json(lastUser);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function lastUserAgree(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.lastUserAgree = lastUserAgree;

var countUsers = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var totalUsers;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _User["default"].countDocuments();

          case 2:
            totalUsers = _context6.sent;
            res.status(200).json(totalUsers);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function countUsers(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.countUsers = countUsers;