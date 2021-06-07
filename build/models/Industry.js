"use strict";
module.exports = function (sequelize, Sequelize) {
    var Industry = sequelize.define('Industry', {
        IndustryID: { type: Sequelize.INTEGER, notEmpty: true },
        Industry: { type: Sequelize.STRING, notEmpty: false },
        Code: { type: Sequelize.STRING, notEmpty: false },
    });
    return Industry;
};
//# sourceMappingURL=Industry.js.map