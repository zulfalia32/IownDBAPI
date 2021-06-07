"use strict";
// This program file is not in use at the moment
Object.defineProperty(exports, "__esModule", { value: true });
exports.utils = void 0;
var models = require('../models');
var utils = /** @class */ (function () {
    function utils() {
    }
    /**
     * @name getTableName
     * @description Get the TableNme from the Request Object
     * @param {string} Entity
     * @return {string}
     */
    utils.getTableName = function (entity) {
        console.log("from utils.ts entity = " + entity);
        switch (entity) {
            case "BCEvent":
                return models.BCEvent;
                break;
            case "Campaign":
                return models.Campaign;
                break;
            default:
                return "Table name can not be determined!!";
        }
    };
    return utils;
}());
exports.utils = utils;
//# sourceMappingURL=utils.js.map