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
require("dotenv").config();
var dbConfig = require("./db.config");
var Sequelize = require('sequelize');
var logger = require("../util/winston");
var DatabaseController = /** @class */ (function () {
    function DatabaseController() {
    }
    DatabaseController.prototype.connectDatabase = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sequelize_1, getSecret, KEY_VAULT_NAME, DATABASE_USER, DATABASE_PASS, DATABASE_HOST, DATABASE_PORT, DATABASE_NAME, dbUser, dbPassWord, dbHost, dbPort, dbName, sequelize_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(process.env.NODE_ENV === "development")) return [3 /*break*/, 2];
                        console.log("This is a development run");
                        return [4 /*yield*/, new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
                                host: dbConfig.HOST,
                                dialect: 'mssql',
                                port: dbConfig.PORT,
                                storage: ':memory:',
                                operatorsAliases: 0,
                                pool: {
                                    max: dbConfig.pool.max,
                                    min: dbConfig.pool.min,
                                    acquire: dbConfig.pool.acquire,
                                    idle: dbConfig.pool.idle
                                },
                                define: {
                                    timestamps: false,
                                    freezeTableName: true
                                },
                            })];
                    case 1:
                        sequelize_1 = _a.sent();
                        sequelize_1.authenticate()
                            .then(function () {
                            logger.info('Database Connection has been established successfully.');
                        })
                            .catch(function (err) {
                            logger.error('Unable to connect to the database:', err);
                        });
                        _a.label = 2;
                    case 2:
                        if (!(process.env.NODE_ENV === "production")) return [3 /*break*/, 9];
                        console.log("This is a production run");
                        getSecret = require("../../azure/azure-keyvault").getSecret;
                        KEY_VAULT_NAME = process.env.KEY_VAULT_NAME;
                        DATABASE_USER = process.env.DATABASE_USER;
                        DATABASE_PASS = process.env.DATABASE_PASS;
                        DATABASE_HOST = process.env.DATABASE_HOST;
                        DATABASE_PORT = process.env.DATABASE_PORT;
                        DATABASE_NAME = process.env.DATABASE_NAME;
                        if (!KEY_VAULT_NAME || !DATABASE_USER || !DATABASE_PASS || !DATABASE_HOST || !DATABASE_PORT || !DATABASE_NAME) {
                            logger.error('missing environment variables for Key Vault');
                            throw Error("missing environment variables for Key Vault");
                        }
                        return [4 /*yield*/, getSecret(DATABASE_USER, KEY_VAULT_NAME)];
                    case 3:
                        dbUser = _a.sent();
                        return [4 /*yield*/, getSecret(DATABASE_PASS, KEY_VAULT_NAME)];
                    case 4:
                        dbPassWord = _a.sent();
                        return [4 /*yield*/, getSecret(DATABASE_HOST, KEY_VAULT_NAME)];
                    case 5:
                        dbHost = _a.sent();
                        return [4 /*yield*/, getSecret(DATABASE_PORT, KEY_VAULT_NAME)];
                    case 6:
                        dbPort = _a.sent();
                        return [4 /*yield*/, getSecret(DATABASE_NAME, KEY_VAULT_NAME)];
                    case 7:
                        dbName = _a.sent();
                        if (!dbUser || !dbPassWord || !dbHost || !dbPort || !dbName) {
                            logger.error('missing DB settings');
                            throw Error("missing DB settings");
                        }
                        dbConfig = {
                            USER: dbUser,
                            PASSWORD: dbPassWord,
                            HOST: String(dbHost),
                            PORT: dbPort,
                            DB: String(dbName),
                            DIALECT: 'mssql',
                            pool: {
                                max: 5,
                                min: 0,
                                acquire: 30000,
                                idle: 10000
                            }
                        };
                        return [4 /*yield*/, new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
                                host: dbConfig.HOST,
                                dialect: 'mssql',
                                port: dbConfig.PORT,
                                storage: ':memory:',
                                operatorsAliases: 0,
                                pool: {
                                    max: dbConfig.pool.max,
                                    min: dbConfig.pool.min,
                                    acquire: dbConfig.pool.acquire,
                                    idle: dbConfig.pool.idle
                                },
                                define: {
                                    timestamps: false,
                                    freezeTableName: true
                                },
                            })];
                    case 8:
                        sequelize_2 = _a.sent();
                        sequelize_2.authenticate()
                            .then(function () {
                            logger.info('Database Connection has been established successfully.');
                        })
                            .catch(function (err) {
                            logger.error('Unable to connect to the database:', err);
                        });
                        _a.label = 9;
                    case 9: return [2 /*return*/];
                }
            });
        });
    };
    ;
    return DatabaseController;
}());
var Database = new DatabaseController();
module.exports = Database;
//# sourceMappingURL=database.js.map