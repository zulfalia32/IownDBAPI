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
Object.defineProperty(exports, "__esModule", { value: true });
var readHandler = require("./readHandler");
var models = require('../../models');
var helper = require("./helper");
var sendMessage = require("../../util/messageHandler").sendMessage;
var messageBook = require("../../constants/messageBook").messageBook;
var MainController = /** @class */ (function () {
    function MainController() {
    }
    MainController.prototype.readData = function (req, res) {
        return __awaiter(this, void 0, void 0, function () {
            var valaidateJson, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, helper.ValidateInputJson(req, res, 'READ')];
                    case 1:
                        valaidateJson = _a.sent();
                        if (valaidateJson == true) {
                            switch (req.body.Entity) {
                                case "BCEvent":
                                    readHandler.Read(req, res, models.BCEvent);
                                    break;
                                case "Campaign":
                                    readHandler.Read(req, res, models.Campaign);
                                    break;
                                case "Company":
                                    readHandler.Read(req, res, models.Company);
                                    break;
                                case "Dividend":
                                    readHandler.Read(req, res, models.Dividend);
                                    break;
                                case "Fundraiser":
                                    readHandler.Read(req, res, models.Fundraiser);
                                    break;
                                case "GuestFundraiser":
                                    readHandler.Read(req, res, models.GuestFundraiser);
                                    break;
                                case "Investor":
                                    readHandler.Read(req, res, models.Investor);
                                    break;
                                case "InvestorBankInfo":
                                    readHandler.Read(req, res, models.InvestorBankInfo);
                                    break;
                                case "InvestorTransaction":
                                    readHandler.Read(req, res, models.InvestorTransaction);
                                    break;
                                case "InvestorTransfer":
                                    readHandler.Read(req, res, models.InvestorTransfer);
                                    break;
                                case "IOwner":
                                    readHandler.Read(req, res, models.IOwner);
                                    break;
                                case "KYC":
                                    readHandler.Read(req, res, models.KYC);
                                    break;
                                case "Pledge":
                                    readHandler.Read(req, res, models.Pledge);
                                    break;
                                case "Property":
                                    readHandler.Read(req, res, models.Property);
                                    break;
                                case "PropertyPledge":
                                    readHandler.Read(req, res, models.PropertyPledge);
                                    break;
                                case "Share":
                                    readHandler.Read(req, res, models.Share);
                                    break;
                                case "Venture":
                                    readHandler.Read(req, res, models.Venture);
                                    break;
                                default:
                                    sendMessage(req, res, "IN4MA", "1", 0, messageBook.MODEL_NOT_FOUND);
                            }
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        sendMessage(req, res, "IN4MA", "2", "Error message from read.ts:readData():" + error_1.message);
                        return [3 /*break*/, 3];
                    case 3:
                        ;
                        return [2 /*return*/];
                }
            });
        });
    };
    ;
    return MainController;
}());
;
var readData = new MainController();
module.exports = readData;
//# sourceMappingURL=read.js.map