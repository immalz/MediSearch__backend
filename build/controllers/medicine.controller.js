"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deleteProductById = exports.updateMedicineById = exports.lastMedicineAgree = exports.getMedicineById = exports.countMedicines = exports.getMedicinesForPharmacy = exports.getMedicines = exports.createMedicine = void 0;

var _Pharmacy = _interopRequireDefault(require("../models/Pharmacy"));

var _Medicine = _interopRequireDefault(require("../models/Medicine"));

var _path = _interopRequireDefault(require("path"));

var _fsExtra = _interopRequireDefault(require("fs-extra"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var _require = require('mongodb'),
    ObjectID = _require.ObjectID;

var createMedicine = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _req$body, name, category, price, type, pharmacy, newMedicine, medicineSaved;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, name = _req$body.name, category = _req$body.category, price = _req$body.price, type = _req$body.type;
            _context.next = 3;
            return _Pharmacy["default"].findById(req.params);

          case 3:
            pharmacy = _context.sent;
            newMedicine = new _Medicine["default"]({
              name: name,
              category: category,
              type: type,
              price: price,
              imgURL: req.file.path,
              company: pharmacy
            });
            _context.next = 7;
            return pharmacy.medicines.push(newMedicine);

          case 7:
            pharmacy.save();
            _context.next = 10;
            return newMedicine.save();

          case 10:
            medicineSaved = _context.sent;
            res.status(201).json({
              medicineSaved: medicineSaved
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createMedicine(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.createMedicine = createMedicine;

var getMedicines = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var medicines;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _Medicine["default"].find().populate('company');

          case 2:
            medicines = _context2.sent;
            res.json(medicines);

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function getMedicines(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.getMedicines = getMedicines;

var getMedicinesForPharmacy = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res) {
    var pharmacyid, medicinesPharmacy;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return _Pharmacy["default"].findById(req.params);

          case 2:
            pharmacyid = _context3.sent;
            _context3.next = 5;
            return _Pharmacy["default"].findById(pharmacyid).populate('medicines');

          case 5:
            medicinesPharmacy = _context3.sent;
            res.json(medicinesPharmacy.medicines);

          case 7:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function getMedicinesForPharmacy(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();

exports.getMedicinesForPharmacy = getMedicinesForPharmacy;

var countMedicines = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res) {
    var totalMedicines;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return _Medicine["default"].countDocuments();

          case 2:
            totalMedicines = _context4.sent;
            res.json(totalMedicines);

          case 4:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function countMedicines(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

exports.countMedicines = countMedicines;

var getMedicineById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(req, res) {
    var medicine;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return _Medicine["default"].findById(req.params.medicineId);

          case 2:
            medicine = _context5.sent;
            res.status(200).json(medicine);

          case 4:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function getMedicineById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();

exports.getMedicineById = getMedicineById;

var lastMedicineAgree = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(req, res) {
    var lastMedicine;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            _context6.next = 2;
            return _Medicine["default"].find().sort({
              $natural: -1
            }).limit(1);

          case 2:
            lastMedicine = _context6.sent;
            res.status(200).json(lastMedicine);

          case 4:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));

  return function lastMedicineAgree(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();

exports.lastMedicineAgree = lastMedicineAgree;

var updateMedicineById = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(req, res) {
    var _req$body2, name, category, type, price, myquery, updatedMedicine;

    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _req$body2 = req.body, name = _req$body2.name, category = _req$body2.category, type = _req$body2.type, price = _req$body2.price;
            myquery = {
              _id: req.params.medicineId
            };
            _context7.next = 4;
            return _Medicine["default"].updateOne(myquery, {
              name: name,
              category: category,
              type: type,
              price: price
            }, {
              "new": true
            });

          case 4:
            updatedMedicine = _context7.sent;
            res.status(200).json({
              message: updatedMedicine
            });

          case 6:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));

  return function updateMedicineById(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();

exports.updateMedicineById = updateMedicineById;

var deleteProductById = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee8(req, res) {
    var medicineId, medicine;
    return regeneratorRuntime.wrap(function _callee8$(_context8) {
      while (1) {
        switch (_context8.prev = _context8.next) {
          case 0:
            medicineId = req.params.medicineId;
            _context8.next = 3;
            return _Medicine["default"].findByIdAndDelete(medicineId);

          case 3:
            medicine = _context8.sent;
            _context8.next = 6;
            return _Pharmacy["default"].update({
              _id: medicine.company
            }, {
              $pull: {
                "medicines": medicineId
              }
            });

          case 6:
            if (!medicine) {
              _context8.next = 9;
              break;
            }

            _context8.next = 9;
            return _fsExtra["default"].unlink(_path["default"].resolve(medicine.imgURL));

          case 9:
            res.status(204).json({
              message: 'Medicine Deleted'
            });

          case 10:
          case "end":
            return _context8.stop();
        }
      }
    }, _callee8);
  }));

  return function deleteProductById(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();

exports.deleteProductById = deleteProductById;