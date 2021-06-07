"use strict";
module.exports = function (sequelize, Sequelize) {
    var Investor = sequelize.define('Investor', {
        InvestorID: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, notEmpty: true },
        AnnualIncome: { type: Sequelize.STRING, notEmpty: false },
        PleaseSpecify: { type: Sequelize.STRING, notEmpty: false },
        PlanOnInvesting: { type: Sequelize.STRING, notEmpty: false },
        PurposeOfInvesting: { type: Sequelize.STRING, notEmpty: false },
        SourceOfFundDeclaration: { type: Sequelize.STRING, notEmpty: false },
        AcceptDeclaration: { type: Sequelize.STRING, notEmpty: false },
        RequestID: { type: Sequelize.STRING, notEmpty: false },
        ContractAddress: { type: Sequelize.STRING, notEmpty: false },
        TransactionHash: { type: Sequelize.STRING, notEmpty: false },
        TenantID: { type: Sequelize.STRING, notEmpty: false },
        Created: { type: Sequelize.DATE, notEmpty: false },
        Modified: { type: Sequelize.DATE, notEmpty: false },
        Status: { type: Sequelize.STRING, notEmpty: false },
        Balance: { type: Sequelize.STRING, notEmpty: false },
        SourceOfFunds: { type: Sequelize.STRING, notEmpty: false },
        AccreditedInvestor: { type: Sequelize.STRING, notEmpty: false },
    });
    return Investor;
};
//# sourceMappingURL=Investor.js.map