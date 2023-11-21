"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _sequelize = require("sequelize");
var _jwtService = _interopRequireDefault(require("./jwtService"));
var _bcryptjs = _interopRequireDefault(require("bcryptjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
//import db from "../models/index";
var db = require("../models");
var valiateDataLogin = function valiateDataLogin(rawData) {
  try {
    if (!rawData.email || !rawData.password) return false;
    return true;
  } catch (error) {
    console.log(error);
  }
};
var validateEmail = function validateEmail(email) {
  return String(email).toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};
var loginUserService = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(rawData) {
    var user, userData, isAdmin, isPassword, infoUser;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          if (!(valiateDataLogin(rawData) === false)) {
            _context.next = 3;
            break;
          }
          return _context.abrupt("return", {
            message: ["Chưa nhập mật khẩu hoặc email"]
          });
        case 3:
          if (validateEmail(rawData.email)) {
            _context.next = 5;
            break;
          }
          return _context.abrupt("return", {
            message: ["Email chưa đúng định dạng"]
          });
        case 5:
          _context.next = 7;
          return db.User.findOne({
            where: {
              email: rawData.email
            }
          });
        case 7:
          user = _context.sent;
          if (!user) {
            _context.next = 18;
            break;
          }
          userData = user.get({
            plain: true
          });
          isAdmin = false;
          if (userData.email === "admin@gmail.com") {
            if (rawData.password === userData.password) {
              isAdmin = true;
            }
          }
          isPassword = _bcryptjs["default"].compareSync(rawData.password, userData.password);
          if (!(isPassword || isAdmin === true)) {
            _context.next = 18;
            break;
          }
          _context.next = 16;
          return _jwtService["default"].getInfoUser(userData);
        case 16:
          infoUser = _context.sent;
          return _context.abrupt("return", {
            user: infoUser
          });
        case 18:
          return _context.abrupt("return", {
            message: "Email hoặc mật khẩu chưa đúng.Hãy kiểm tra lại"
          });
        case 21:
          _context.prev = 21;
          _context.t0 = _context["catch"](0);
          console.log("error", _context.t0);
          return _context.abrupt("return", {
            message: "Something wrong from server"
          });
        case 25:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 21]]);
  }));
  return function loginUserService(_x) {
    return _ref.apply(this, arguments);
  };
}();
var salt = _bcryptjs["default"].genSaltSync(10);
var hashUserPassword = function hashUserPassword(userPassword) {
  var hash = _bcryptjs["default"].hashSync(userPassword, salt);
  return hash;
};
var checkEmailExist = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(userEmail) {
    var user;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return db.User.findOne({
            where: {
              email: userEmail
            }
          });
        case 3:
          user = _context2.sent;
          if (!user) {
            _context2.next = 6;
            break;
          }
          return _context2.abrupt("return", true);
        case 6:
          return _context2.abrupt("return", false);
        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](0);
          console.log(_context2.t0);
        case 12:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 9]]);
  }));
  return function checkEmailExist(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var registerUserService = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(rawData) {
    var hashPassword, newUser, info;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          if (!(!rawData.email || !rawData.fullName || !rawData.password)) {
            _context3.next = 3;
            break;
          }
          return _context3.abrupt("return", {
            message: "Chưa nhập đầy đủ thông tin. Hãy kiểm tra lại"
          });
        case 3:
          _context3.next = 5;
          return checkEmailExist(rawData.email);
        case 5:
          _context3.t0 = _context3.sent;
          if (!(_context3.t0 === true)) {
            _context3.next = 8;
            break;
          }
          return _context3.abrupt("return", {
            message: "Email đã được đăng kí.Hãy kiểm tra lại"
          });
        case 8:
          if (validateEmail(rawData.email)) {
            _context3.next = 10;
            break;
          }
          return _context3.abrupt("return", {
            message: "Email chưa đúng định dạng. Hãy kiểm tra lại"
          });
        case 10:
          hashPassword = hashUserPassword(rawData.password);
          _context3.next = 13;
          return db.User.create({
            fullName: rawData.fullName,
            email: rawData.email,
            password: hashPassword
          });
        case 13:
          newUser = _context3.sent;
          _context3.next = 16;
          return _jwtService["default"].getInfoUser(newUser);
        case 16:
          info = _context3.sent;
          return _context3.abrupt("return", {
            user: info
          });
        case 20:
          _context3.prev = 20;
          _context3.t1 = _context3["catch"](0);
          console.log(_context3.t1);
          return _context3.abrupt("return", {
            message: "Something wrong in server"
          });
        case 24:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 20]]);
  }));
  return function registerUserService(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
var getListUserService = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(page, limit, field, sort, searchName, searchEmail) {
    var total, list;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          page = +page;
          limit = +limit;
          _context4.next = 5;
          return db.User.count({
            where: _defineProperty({}, _sequelize.Op.and, [{
              fullName: _defineProperty({}, _sequelize.Op.like, "%".concat(searchName, "%"))
            }, {
              email: _defineProperty({}, _sequelize.Op.like, "%".concat(searchEmail, "%"))
            }])
          });
        case 5:
          total = _context4.sent;
          _context4.next = 8;
          return db.User.findAll({
            offset: (page - 1) * limit,
            limit: limit,
            order: [[field, sort]],
            where: _defineProperty({}, _sequelize.Op.and, [{
              fullName: _defineProperty({}, _sequelize.Op.like, "%".concat(searchName, "%"))
            }, {
              email: _defineProperty({}, _sequelize.Op.like, "%".concat(searchEmail, "%"))
            }]),
            attributes: ["fullName", "email", "type", "role", "id", "createdAt", "updatedAt"]
          });
        case 8:
          list = _context4.sent;
          return _context4.abrupt("return", {
            list: list,
            total: total
          });
        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](0);
          console.log(_context4.t0);
        case 15:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 12]]);
  }));
  return function getListUserService(_x4, _x5, _x6, _x7, _x8, _x9) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteUserService = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(userId) {
    var del;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return db.User.destroy({
            where: {
              id: userId
            }
          });
        case 3:
          del = _context5.sent;
          if (!del) {
            _context5.next = 8;
            break;
          }
          return _context5.abrupt("return", {
            DT: "delete success"
          });
        case 8:
          return _context5.abrupt("return", {
            message: "Somw thing Wrong"
          });
        case 9:
          _context5.next = 15;
          break;
        case 11:
          _context5.prev = 11;
          _context5.t0 = _context5["catch"](0);
          console.log(_context5.t0);
          return _context5.abrupt("return", {
            message: "Some thing wrong"
          });
        case 15:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 11]]);
  }));
  return function deleteUserService(_x10) {
    return _ref5.apply(this, arguments);
  };
}();
var updateUserSerice = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(id, name) {
    var u;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          if (name) {
            _context6.next = 2;
            break;
          }
          return _context6.abrupt("return", {
            message: "Vui lòng nhập đầy đủ thông tin"
          });
        case 2:
          _context6.prev = 2;
          _context6.next = 5;
          return db.User.update({
            fullName: name
          }, {
            where: {
              id: id
            }
          });
        case 5:
          u = _context6.sent;
          return _context6.abrupt("return", {
            DT: "update success"
          });
        case 9:
          _context6.prev = 9;
          _context6.t0 = _context6["catch"](2);
        case 11:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[2, 9]]);
  }));
  return function updateUserSerice(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var updatePasswordUser = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(email, newPass) {
    var hashPassword, u;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          if (!(!email || !newPass)) {
            _context7.next = 3;
            break;
          }
          return _context7.abrupt("return", {
            message: "Vui lòng nhập đầy đủ thông tin"
          });
        case 3:
          hashPassword = hashUserPassword(newPass);
          _context7.next = 6;
          return db.User.update({
            password: hashPassword
          }, {
            where: {
              email: email
            }
          });
        case 6:
          u = _context7.sent;
          return _context7.abrupt("return", {
            DT: "update success"
          });
        case 10:
          _context7.prev = 10;
          _context7.t0 = _context7["catch"](0);
          return _context7.abrupt("return", {
            message: "Có lỗi xảy ra"
          });
        case 13:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 10]]);
  }));
  return function updatePasswordUser(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var checkPasswordService = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee8(email, pass) {
    var user, userData, isPassword;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return db.User.findOne({
            where: {
              email: email
            }
          });
        case 2:
          user = _context8.sent;
          if (!user) {
            _context8.next = 8;
            break;
          }
          userData = user.get({
            plain: true
          });
          isPassword = _bcryptjs["default"].compareSync(pass, userData.password);
          if (!isPassword) {
            _context8.next = 8;
            break;
          }
          return _context8.abrupt("return", true);
        case 8:
          return _context8.abrupt("return", false);
        case 9:
        case "end":
          return _context8.stop();
      }
    }, _callee8);
  }));
  return function checkPasswordService(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var _default = {
  loginUserService: loginUserService,
  registerUserService: registerUserService,
  getListUserService: getListUserService,
  deleteUserService: deleteUserService,
  updateUserSerice: updateUserSerice,
  updatePasswordUser: updatePasswordUser,
  checkPasswordService: checkPasswordService
};
exports["default"] = _default;