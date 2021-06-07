"use strict";
module.exports = function (sequelize, Sequelize) {
    var GuestFundraiser = sequelize.define('GuestFundraiser', {
        FundraiserID: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, notEmpty: true },
        CompanyName: { type: Sequelize.STRING, notEmpty: false },
        ReasonForRaisingFunds: { type: Sequelize.STRING, notEmpty: false },
        RaiseStartDate: { type: Sequelize.DATE, notEmpty: false },
        RaiseEndDate: { type: Sequelize.DATE, notEmpty: false },
        MinimumInvestmentAmount: { type: Sequelize.STRING, notEmpty: false },
        MaximumInvestmentAmount: { type: Sequelize.STRING, notEmpty: false },
        StorageURL: { type: Sequelize.STRING, notEmpty: false },
        TenantID: { type: Sequelize.STRING, notEmpty: false },
        ContractAddress: { type: Sequelize.STRING, notEmpty: false },
        TransactionHash: { type: Sequelize.STRING, notEmpty: false },
        RequestID: { type: Sequelize.STRING, notEmpty: false },
        PayLoad: { type: Sequelize.STRING, notEmpty: false },
        Created: { type: Sequelize.DATE, notEmpty: false },
        Modified: { type: Sequelize.DATE, notEmpty: false },
        Status: { type: Sequelize.STRING, notEmpty: false },
    });
    return GuestFundraiser;
};
//# sourceMappingURL=GuestFundraiser.js.map