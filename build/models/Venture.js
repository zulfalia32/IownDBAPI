"use strict";
module.exports = function (sequelize, Sequelize) {
    var Venture = sequelize.define('Venture', {
        VentureID: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, notEmpty: true },
        VentureName: { type: Sequelize.STRING, notEmpty: false },
        CampaignPitch: { type: Sequelize.STRING, notEmpty: false },
        HowMuchDoYouWantToRaise: { type: Sequelize.DECIMAL, notEmpty: false },
        HowMuchEquityDoYouWantToOffload: { type: Sequelize.STRING, notEmpty: false },
        ReasonsInvestBusiness: { type: Sequelize.STRING, notEmpty: false },
        RaiseStartDate: { type: Sequelize.DATE, notEmpty: false },
        ProfitDistributionCycle: { type: Sequelize.STRING, notEmpty: false },
        MinimumInvestmentAmount: { type: Sequelize.DECIMAL, notEmpty: false },
        MaximumInvestmentAmount: { type: Sequelize.DECIMAL, notEmpty: false },
        CompanyID: { type: Sequelize.INTEGER, notEmpty: false },
        RequestID: { type: Sequelize.STRING, notEmpty: false },
        TransactionHash: { type: Sequelize.STRING, notEmpty: false },
        ValuationContractAddress: { type: Sequelize.STRING, notEmpty: false },
        DividendContractAddress: { type: Sequelize.STRING, notEmpty: false },
        VentureStoreContractAddress: { type: Sequelize.STRING, notEmpty: false },
        VentureContractAddress: { type: Sequelize.STRING, notEmpty: false },
        TenantID: { type: Sequelize.STRING, notEmpty: false },
        Created: { type: Sequelize.DATE, notEmpty: false },
        Modified: { type: Sequelize.DATE, notEmpty: false },
        Status: { type: Sequelize.STRING, notEmpty: false },
        AssetID: { type: Sequelize.INTEGER, notEmpty: false },
        CountryOfIncorporation: { type: Sequelize.STRING, notEmpty: false },
        Industry: { type: Sequelize.STRING, notEmpty: false },
    });
    return Venture;
};
//# sourceMappingURL=Venture.js.map