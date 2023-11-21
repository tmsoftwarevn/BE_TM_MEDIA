"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//import { Sequelize, sequelize } from "../models/index";
var Sequelize = require("../models/index");
var sequelize = require("../models/index");
var db = require("../models");
var createBookService = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(book) {
    var info;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return db.Book.create({
            author: book.author,
            thumbnail: book.thumbnail,
            slider: book.slider,
            mainText: book.mainText,
            price: book.price,
            sold: book.sold,
            quantity: book.quantity,
            rate: book.rate,
            idCategory: book.idCategory
          });
        case 2:
          info = _context.sent;
          info = info.get({
            plain: true
          });
          if (!info) {
            _context.next = 6;
            break;
          }
          return _context.abrupt("return", {
            DT: "SUCCESS",
            info: info
          });
        case 6:
        case "end":
          return _context.stop();
      }
    }, _callee);
  }));
  return function createBookService(_x) {
    return _ref.apply(this, arguments);
  };
}();
var getInfoBookService = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(idBook) {
    var inf;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return db.Book.findOne({
            where: {
              id: idBook
            },
            attributes: ["id", "author", "thumbnail", "slider", "mainText", "price", "sold", "quantity", "rate", "Category.category", "createdAt", "updatedAt"],
            include: {
              model: db.Category,
              attributes: []
            },
            raw: true
          });
        case 2:
          inf = _context2.sent;
          if (!inf) {
            _context2.next = 5;
            break;
          }
          return _context2.abrupt("return", {
            DT: "SUCCESS",
            inf: inf
          });
        case 5:
        case "end":
          return _context2.stop();
      }
    }, _callee2);
  }));
  return function getInfoBookService(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var deleteBookService = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(id) {
    var del;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          del = db.Book.destroy({
            where: {
              id: id
            }
          });
          if (!del) {
            _context3.next = 5;
            break;
          }
          return _context3.abrupt("return", {
            DT: "delete success"
          });
        case 5:
          return _context3.abrupt("return", {
            message: "Some thing Wrong"
          });
        case 6:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function deleteBookService(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var updateBookService = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(id, up) {
    var values, selector, find, a;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          values = {
            author: up.author,
            thumbnail: up.thumbnail,
            slider: up.slider,
            mainText: up.mainText,
            price: up.price,
            quantity: up.quantity,
            idCategory: up.idCategory
          };
          selector = {
            where: {
              id: id
            }
          };
          _context4.next = 4;
          return db.Book.findOne({
            where: {
              id: id
            }
          });
        case 4:
          find = _context4.sent;
          if (!find) {
            _context4.next = 12;
            break;
          }
          _context4.next = 8;
          return db.Book.update(values, selector);
        case 8:
          a = _context4.sent;
          return _context4.abrupt("return", {
            DT: a
          });
        case 12:
          return _context4.abrupt("return", null);
        case 13:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateBookService(_x4, _x5) {
    return _ref4.apply(this, arguments);
  };
}();
var getListBookService = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(page, limit, field, sort, mainText, price, category) {
    var total, list;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          page = +page;
          limit = +limit;
          _context5.prev = 2;
          _context5.next = 5;
          return db.Book.count({
            where: _defineProperty({}, _sequelize.Op.and, [{
              mainText: _defineProperty({}, _sequelize.Op.like, mainText ? "%" + mainText + "%" : "%%")
            }, {
              price: _defineProperty({}, _sequelize.Op.gt, price ? +price : 0)
            }]),
            include: {
              where: category ? {
                id: category
              } : "",
              model: db.Category,
              attributes: []
            }
          });
        case 5:
          total = _context5.sent;
          _context5.next = 8;
          return db.Book.findAll({
            offset: (page - 1) * limit,
            limit: limit,
            order: [[field, sort]],
            where: _defineProperty({}, _sequelize.Op.and, [{
              mainText: _defineProperty({}, _sequelize.Op.like, mainText ? "%".concat(mainText, "%") : "%%")
            }, {
              price: _defineProperty({}, _sequelize.Op.gt, price ? +price : 0)
            }]),
            attributes: ["id", "author", "thumbnail", "slider", "mainText", "price", "sold", "quantity", "rate", "Category.category", "createdAt", "updatedAt"],
            include: {
              where: category ? {
                id: category
              } : "",
              model: db.Category,
              attributes: []
            },
            raw: true
          });
        case 8:
          list = _context5.sent;
          return _context5.abrupt("return", {
            list: list,
            total: total
          });
        case 12:
          _context5.prev = 12;
          _context5.t0 = _context5["catch"](2);
          console.log(_context5.t0);
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[2, 12]]);
  }));
  return function getListBookService(_x6, _x7, _x8, _x9, _x10, _x11, _x12) {
    return _ref5.apply(this, arguments);
  };
}();
var getListBookHomeService = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(page, limit, category, field, sort, rate, price) {
    var array, arrPrice, total, list;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          page = +page;
          limit = +limit;
          array = JSON.parse("[" + category + "]");
          arrPrice = JSON.parse("[" + price + "]");
          _context6.prev = 4;
          _context6.next = 7;
          return db.Book.count({
            where: _defineProperty({}, _sequelize.Op.and, [{
              rate: _defineProperty({}, _sequelize.Op.gte, rate ? +rate : 0)
            }, {
              price: _defineProperty({}, _sequelize.Op.between, price ? arrPrice : [0, 99999999])
            }]),
            include: {
              model: db.Category,
              where: category ? {
                id: array
              } : "",
              attributes: []
            }
          });
        case 7:
          total = _context6.sent;
          _context6.next = 10;
          return db.Book.findAll({
            offset: (page - 1) * limit,
            limit: limit,
            order: field ? [[field, sort]] : [],
            attributes: ["id", "author", "thumbnail", "slider", "mainText", "price", "sold", "quantity", "rate", "Category.category", "createdAt", "updatedAt"],
            where: _defineProperty({}, _sequelize.Op.and, [{
              rate: _defineProperty({}, _sequelize.Op.gte, rate ? +rate : 0)
            }, {
              price: _defineProperty({}, _sequelize.Op.between, price ? arrPrice : [0, 99999999])
            }]),
            include: {
              model: db.Category,
              where: category ? {
                id: array
              } : "",
              attributes: []
            },
            raw: true
          });
        case 10:
          list = _context6.sent;
          return _context6.abrupt("return", {
            list: list,
            total: total
          });
        case 14:
          _context6.prev = 14;
          _context6.t0 = _context6["catch"](4);
          console.log(_context6.t0);
        case 17:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[4, 14]]);
  }));
  return function getListBookHomeService(_x13, _x14, _x15, _x16, _x17, _x18, _x19) {
    return _ref6.apply(this, arguments);
  };
}();
var updateBookAfterOrder = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(bookId, count) {
    var selector, values, u;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          selector = {
            where: {
              id: bookId
            }
          };
          values = {
            sold: sequelize.literal("sold + ".concat(count)),
            quantity: sequelize.literal("quantity - ".concat(count))
          };
          _context7.next = 4;
          return db.Book.update(values, selector);
        case 4:
          u = _context7.sent;
          if (!u) {
            _context7.next = 7;
            break;
          }
          return _context7.abrupt("return", {
            DT: u
          });
        case 7:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return function updateBookAfterOrder(_x20, _x21) {
    return _ref7.apply(this, arguments);
  };
}();
var listBookPopulateServiceAll = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8() {
    var d;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return db.Book.findAll({
            order: [["sold", "DESC"]]
          });
        case 2:
          d = _context8.sent;
          if (!d) {
            _context8.next = 5;
            break;
          }
          return _context8.abrupt("return", {
            DT: d
          });
        case 5:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function listBookPopulateServiceAll() {
    return _ref8.apply(this, arguments);
  };
}();
var searchBookService = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee9(mainText, page, limit) {
    var total, list;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          page = +page;
          limit = +limit;
          _context9.prev = 2;
          _context9.next = 5;
          return db.Book.count({
            where: {
              mainText: _defineProperty({}, _sequelize.Op.like, mainText ? "%" + mainText + "%" : "%%")
            }
          });
        case 5:
          total = _context9.sent;
          _context9.next = 8;
          return db.Book.findAll({
            offset: (page - 1) * limit,
            limit: limit,
            attributes: ["id", "author", "thumbnail", "slider", "mainText", "price", "sold", "quantity", "rate", "Category.category", "createdAt", "updatedAt"],
            where: {
              mainText: _defineProperty({}, _sequelize.Op.regexp, mainText)
            },
            include: {
              model: db.Category,
              attributes: []
            },
            raw: true
          });
        case 8:
          list = _context9.sent;
          if (!(list.length === 0)) {
            _context9.next = 13;
            break;
          }
          _context9.next = 12;
          return db.Book.findAll({
            offset: (page - 1) * limit,
            limit: limit,
            attributes: ["id", "author", "thumbnail", "slider", "mainText", "price", "sold", "quantity", "rate", "Category.category", "createdAt", "updatedAt"],
            where: {
              mainText: _defineProperty({}, _sequelize.Op.like, mainText ? "%" + mainText + "%" : "%%")
            },
            include: {
              model: db.Category,
              attributes: []
            },
            raw: true
          });
        case 12:
          list = _context9.sent;
        case 13:
          return _context9.abrupt("return", {
            list: list,
            total: total
          });
        case 16:
          _context9.prev = 16;
          _context9.t0 = _context9["catch"](2);
          console.log(_context9.t0);
          return _context9.abrupt("return", null);
        case 20:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[2, 16]]);
  }));
  return function searchBookService(_x22, _x23, _x24) {
    return _ref9.apply(this, arguments);
  };
}();
var _default = {
  createBookService: createBookService,
  getInfoBookService: getInfoBookService,
  getListBookService: getListBookService,
  deleteBookService: deleteBookService,
  updateBookService: updateBookService,
  getListBookHomeService: getListBookHomeService,
  updateBookAfterOrder: updateBookAfterOrder,
  listBookPopulateServiceAll: listBookPopulateServiceAll,
  searchBookService: searchBookService
};
exports["default"] = _default;