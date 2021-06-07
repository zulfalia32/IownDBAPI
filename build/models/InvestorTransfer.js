"use strict";
module.exports = function (sequelize, Sequelize) {
    var InvestorTransfer = sequelize.define('InvestorTransfer', {
        TransactionID: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, notEmpty: true },
        BalanceBeforeTransaction: { type: Sequelize.STRING, notEmpty: false },
        BalanceAfterTransaction: { type: Sequelize.STRING, notEmpty: false },
        Amount: { type: Sequelize.STRING, notEmpty: false },
        TransactionType: { type: Sequelize.STRING, notEmpty: false },
        Status: { type: Sequelize.STRING, notEmpty: false },
        Created: { type: Sequelize.DATE, notEmpty: false },
        Modified: { type: Sequelize.DATE, notEmpty: false },
        RequestID: { type: Sequelize.STRING, notEmpty: false },
        TenantID: { type: Sequelize.STRING, notEmpty: false },
    });
    return InvestorTransfer;
};
//# sourceMappingURL=InvestorTransfer.js.map