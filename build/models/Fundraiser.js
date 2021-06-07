"use strict";
module.exports = function (sequelize, Sequelize) {
    var Fundraiser = sequelize.define('Fundraiser', {
        FundraiserID: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, notEmpty: true },
        CompanyRole: { type: Sequelize.STRING, notEmpty: false },
        RequestID: { type: Sequelize.STRING, notEmpty: false },
        ContractAddress: { type: Sequelize.STRING, notEmpty: false },
        TransactionHash: { type: Sequelize.STRING, notEmpty: false },
        TenantID: { type: Sequelize.STRING, notEmpty: false },
        Created: { type: Sequelize.DATE, notEmpty: false },
        Modified: { type: Sequelize.DATE, notEmpty: false },
        Status: { type: Sequelize.STRING, notEmpty: false },
    });
    return Fundraiser;
};
//# sourceMappingURL=Fundraiser.js.map