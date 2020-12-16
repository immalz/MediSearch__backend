"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deletePharm = exports.deleteRequestPharms = exports.createRequestPharms = exports.countRequestPharms = exports.lastPharmAgree = exports.countMedicineforPharm = exports.countPharms = exports.getRequestPharms = exports.updatePharmacyById = exports.getPharmById = exports.getPharms = void 0;

var _Pharmacy = _interopRequireDefault(require("../models/Pharmacy"));

var _Request = _interopRequireDefault(require("../models/Request"));

var _Medicine = _interopRequireDefault(require("../models/Medicine"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var getPharms = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var Pharms;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _Pharmacy["default"].find();

          case 2:
            Pharms = _context.sent;
            res.status(200).json(Pharms);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getPharms(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.getPharms = getPharms;

var getPharmById = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var Pharmacy;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Pharmacy["default"].findById(req.params.id);

          case 2:
            Pharmacy = _context2.sent;
            res.status(200).json(Pharmacy);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getPharmById(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getPharmById = getPharmById;

var updatePharmacyById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var _req$body, razonSocial, name, nameOwner, email, phone, RUC, address, latitude, longitude, imgURL, myquery, updatedPharmacy;

    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _req$body = req.body, razonSocial = _req$body.razonSocial, name = _req$body.name, nameOwner = _req$body.nameOwner, email = _req$body.email, phone = _req$body.phone, RUC = _req$body.RUC, address = _req$body.address, latitude = _req$body.latitude, longitude = _req$body.longitude, imgURL = _req$body.imgURL;
            myquery = {
              _id: req.params.pharmId
            };
            _context3.next = 4;
            return _Pharmacy["default"].updateOne(myquery, {
              razonSocial: razonSocial,
              name: name,
              nameOwner: nameOwner,
              email: email,
              phone: phone,
              RUC: RUC,
              address: address,
              latitude: latitude,
              longitude: longitude,
              imgURL: imgURL
            }, {
              "new": true
            });

          case 4:
            updatedPharmacy = _context3.sent;
            res.status(200).json({
              message: updatedPharmacy
            });

          case 6:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updatePharmacyById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.updatePharmacyById = updatePharmacyById;

var getRequestPharms = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var PharmsReq;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Request["default"].find();

          case 2:
            PharmsReq = _context4.sent;
            res.status(200).json(PharmsReq);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function getRequestPharms(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.getRequestPharms = getRequestPharms;

var countPharms = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var totalPharms;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Pharmacy["default"].countDocuments();

          case 2:
            totalPharms = _context5.sent;
            res.status(200).json(totalPharms);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function countPharms(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.countPharms = countPharms;

var countMedicineforPharm = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var CountMedicines;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Medicine["default"].find({
              company: req.params._id
            }).countDocuments();

          case 2:
            CountMedicines = _context6.sent;
            res.status(200).json(CountMedicines);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function countMedicineforPharm(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.countMedicineforPharm = countMedicineforPharm;

var lastPharmAgree = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var lastPharm;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return _Pharmacy["default"].find().sort({
              $natural: -1
            }).limit(1);

          case 2:
            lastPharm = _context7.sent;
            res.status(200).json(lastPharm);

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function lastPharmAgree(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.lastPharmAgree = lastPharmAgree;

var countRequestPharms = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var totalRequestPharms;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            _context8.next = 2;
            return _Request["default"].countDocuments();

          case 2:
            totalRequestPharms = _context8.sent;
            res.status(200).json(totalRequestPharms);

          case 4:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function countRequestPharms(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.countRequestPharms = countRequestPharms;

var createRequestPharms = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee9(req, res) {
    var _req$body2, RUC, address, email, password, latitude, longitude, name, nameOwner, phone, imgURL, razonSocial, newRequest, savedRequest;

    return regeneratorRuntime.wrap(function _callee9$(_context9) {
      while (1) {
        switch (_context9.prev = _context9.next) {
          case 0:
            _req$body2 = req.body, RUC = _req$body2.RUC, address = _req$body2.address, email = _req$body2.email, password = _req$body2.password, latitude = _req$body2.latitude, longitude = _req$body2.longitude, name = _req$body2.name, nameOwner = _req$body2.nameOwner, phone = _req$body2.phone, imgURL = _req$body2.imgURL, razonSocial = _req$body2.razonSocial;
            newRequest = new _Request["default"]({
              razonSocial: razonSocial,
              name: name,
              nameOwner: nameOwner,
              email: email,
              phone: phone,
              RUC: RUC,
              address: address,
              latitude: latitude,
              longitude: longitude,
              imgURL: imgURL,
              password: password
            });
            _context9.next = 4;
            return newRequest.save();

          case 4:
            savedRequest = _context9.sent;
            console.log(savedRequest);
            res.status(200).json({
              savedRequest: savedRequest
            });

          case 7:
          case "end":
            return _context9.stop();
        }
      }
    }, _callee9);
  }));

  return function createRequestPharms(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();

exports.createRequestPharms = createRequestPharms;

var deleteRequestPharms = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee10(req, res) {
    var pharmId, pharm;
    return regeneratorRuntime.wrap(function _callee10$(_context10) {
      while (1) {
        switch (_context10.prev = _context10.next) {
          case 0:
            pharmId = req.params.pharmId;
            console.log(req.params);
            _context10.next = 4;
            return _Request["default"].findByIdAndRemove(pharmId);

          case 4:
            pharm = _context10.sent;
            res.status(204).json({
              message: "se ha eliminado con exito la solicitud"
            });

          case 6:
          case "end":
            return _context10.stop();
        }
      }
    }, _callee10);
  }));

  return function deleteRequestPharms(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();

exports.deleteRequestPharms = deleteRequestPharms;

var deletePharm = /*#__PURE__*/function () {
  var _ref11 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee11(req, res) {
    var pharmId, PharmacyRemoved;
    return regeneratorRuntime.wrap(function _callee11$(_context11) {
      while (1) {
        switch (_context11.prev = _context11.next) {
          case 0:
            pharmId = req.params.pharmId;
            _context11.next = 3;
            return _Pharmacy["default"].findByIdAndRemove(pharmId);

          case 3:
            PharmacyRemoved = _context11.sent;
            res.status(204).json({
              message: "se ha eliminado la farmacia!"
            });

          case 5:
          case "end":
            return _context11.stop();
        }
      }
    }, _callee11);
  }));

  return function deletePharm(_x21, _x22) {
    return _ref11.apply(this, arguments);
  };
}();

exports.deletePharm = deletePharm;