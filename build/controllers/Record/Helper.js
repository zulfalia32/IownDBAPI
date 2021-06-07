"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var sendMessage = require("../../util/messageHandler").sendMessage;
var messageBook = require("../../constants/messageBook").messageBook;
var HelperController = /** @class */ (function () {
    function HelperController() {
    }
    HelperController.prototype.ValidateInputJson = function (req, res, flag) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (req.body.RequestID == null || String(req.body.RequestID).trim() == "") {
                    sendMessage(req, res, "IN4MA", "1", messageBook.ATTRIBUTES_REQUIRED_1);
                    return [2 /*return*/, false];
                }
                ;
                if (req.body.TenantID == null || String(req.body.TenantID).trim() == "") {
                    sendMessage(req, res, "IN4MA", "1", messageBook.ATTRIBUTES_REQUIRED_2);
                    return [2 /*return*/, false];
                }
                ;
                if (req.body.Entity == null || String(req.body.Entity).trim() == "") {
                    sendMessage(req, res, "IN4MA", "1", messageBook.ATTRIBUTES_REQUIRED_3);
                    return [2 /*return*/, false];
                }
                ;
                if (req.body.Limit == null || String(req.body.Limit).trim() == "") {
                    sendMessage(req, res, "IN4MA", "1", messageBook.ATTRIBUTES_REQUIRED_4);
                    return [2 /*return*/, false];
                }
                ;
                if (flag == 'UPDATE') {
                    if (req.body.Parameters == null || req.body.Parameters == "") {
                        sendMessage(req, res, "IN4MA", "1", messageBook.ATTRIBUTES_REQUIRED_5);
                        return [2 /*return*/, false];
                    }
                    ;
                }
                return [2 /*return*/, true];
            });
        });
    };
    ;
    HelperController.prototype.GetQueryString = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, requestID, tenantID, paramArrayObject, limit, jsonData, _b, _c, _d, key, objectValue, _e, _f, _g, parameterName, parameterValue;
            var e_1, _h, e_2, _j;
            return __generator(this, function (_k) {
                _a = __read([req.body.RequestID, req.body.TenantID, req.body.Parameters, Number(req.body.Limit)], 4), requestID = _a[0], tenantID = _a[1], paramArrayObject = _a[2], limit = _a[3];
                jsonData = '';
                jsonData = " { \"TenantID\" : \"" + tenantID + "\" ";
                jsonData = jsonData + (" ,\"RequestID\" : \"" + requestID + "\" ");
                //for-of loop to loop through entries 
                if (req.body.Parameters != null) {
                    try {
                        for (_b = __values(Object.entries(paramArrayObject)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            _d = __read(_c.value, 2), key = _d[0], objectValue = _d[1];
                            try {
                                for (_e = (e_2 = void 0, __values(Object.entries(objectValue))), _f = _e.next(); !_f.done; _f = _e.next()) {
                                    _g = __read(_f.value, 2), parameterName = _g[0], parameterValue = _g[1];
                                    jsonData = jsonData + (" , \"" + parameterName + "\" : \"" + parameterValue + "\" ");
                                }
                            }
                            catch (e_2_1) { e_2 = { error: e_2_1 }; }
                            finally {
                                try {
                                    if (_f && !_f.done && (_j = _e.return)) _j.call(_e);
                                }
                                finally { if (e_2) throw e_2.error; }
                            }
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_h = _b.return)) _h.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
                jsonData = jsonData + " }";
                //console.log( JSON.parse(jsonData) );
                return [2 /*return*/, jsonData];
            });
        });
    };
    ;
    HelperController.prototype.GetQueryStringValues = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, requestID, tenantID, paramArrayObject, limit, jsonData, loopCount, _b, _c, _d, key, objectValue, _e, _f, _g, parameterName, parameterValue;
            var e_3, _h, e_4, _j;
            return __generator(this, function (_k) {
                _a = __read([req.body.RequestID, req.body.TenantID, req.body.Parameters, Number(req.body.Limit)], 4), requestID = _a[0], tenantID = _a[1], paramArrayObject = _a[2], limit = _a[3];
                jsonData = '';
                loopCount = 0;
                //for-of loop to loop through entries 
                if (req.body.Parameters != null) {
                    try {
                        for (_b = __values(Object.entries(paramArrayObject)), _c = _b.next(); !_c.done; _c = _b.next()) {
                            _d = __read(_c.value, 2), key = _d[0], objectValue = _d[1];
                            try {
                                for (_e = (e_4 = void 0, __values(Object.entries(objectValue))), _f = _e.next(); !_f.done; _f = _e.next()) {
                                    _g = __read(_f.value, 2), parameterName = _g[0], parameterValue = _g[1];
                                    if (loopCount == 0) {
                                        jsonData = " { \"" + parameterName + "\" : \"" + parameterValue + "\" ";
                                        loopCount = loopCount + 1;
                                    }
                                    else {
                                        jsonData = jsonData + (" , \"" + parameterName + "\" : \"" + parameterValue + "\" ");
                                        loopCount = loopCount + 1;
                                    }
                                }
                            }
                            catch (e_4_1) { e_4 = { error: e_4_1 }; }
                            finally {
                                try {
                                    if (_f && !_f.done && (_j = _e.return)) _j.call(_e);
                                }
                                finally { if (e_4) throw e_4.error; }
                            }
                        }
                    }
                    catch (e_3_1) { e_3 = { error: e_3_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_h = _b.return)) _h.call(_b);
                        }
                        finally { if (e_3) throw e_3.error; }
                    }
                }
                jsonData = jsonData + " }";
                console.log(" (values) columns or attributes to be updated (SET part of the update query) = " + JSON.parse(jsonData));
                return [2 /*return*/, jsonData];
            });
        });
    };
    ;
    HelperController.prototype.GetQueryStringSelecter = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var _a, requestID, tenantID, paramArrayObject, limit, query, queryObject, selector;
            return __generator(this, function (_b) {
                _a = __read([req.body.RequestID, req.body.TenantID, req.body.Parameters, Number(req.body.Limit)], 4), requestID = _a[0], tenantID = _a[1], paramArrayObject = _a[2], limit = _a[3];
                query = Array();
                queryObject = new Object();
                queryObject = { TenantID: "" + tenantID };
                query.push(queryObject);
                queryObject = { RequestID: "" + requestID };
                query.push(queryObject);
                selector = { where: query };
                console.log("selector (WHERE clause columns or attributes )  = " + JSON.stringify(selector));
                return [2 /*return*/, selector];
            });
        });
    };
    ;
    return HelperController;
}());
;
var Helper = new HelperController();
module.exports = Helper;
//# sourceMappingURL=helper.js.map