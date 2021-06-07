"use strict";
module.exports = function (sequelize, Sequelize) {
    var Campaign = sequelize.define('Campaign', {
        CampaignID: {
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER
        },
        CampaignBanner: { type: Sequelize.STRING, notEmpty: false },
        CampaignBannerPostRule: { type: Sequelize.STRING, notEmpty: false },
        CampaignVideo: { type: Sequelize.STRING, notEmpty: false },
        CampaignGallery: { type: Sequelize.STRING, notEmpty: false },
        CampaignDescription: { type: Sequelize.STRING, notEmpty: false },
        CampaignPitch: { type: Sequelize.STRING, notEmpty: false },
        HowMuchDoYouWantToRaise: { type: Sequelize.STRING, notEmpty: false },
        HowMuchEquityDoYouWantToOffload: { type: Sequelize.STRING, notEmpty: false },
        RaiseStartDate: { type: Sequelize.DATE, notEmpty: false },
        RaiseEndDate: { type: Sequelize.DATE, notEmpty: false },
        MinimumInvestmentAmount: { type: Sequelize.STRING, notEmpty: false },
        MaximumInvestmentAmount: { type: Sequelize.STRING, notEmpty: false },
        ProfitDistributionCycle: { type: Sequelize.STRING, notEmpty: false },
        CompanyTradeLicense: { type: Sequelize.STRING, notEmpty: false },
        BusinessPlan: { type: Sequelize.STRING, notEmpty: false },
        Financials: { type: Sequelize.STRING, notEmpty: false },
        AuditReport: { type: Sequelize.STRING, notEmpty: false },
        ValuationReport: { type: Sequelize.STRING, notEmpty: false },
        CampaignTermsConditions: { type: Sequelize.STRING, notEmpty: false },
        BankLetterOrStatement: { type: Sequelize.STRING, notEmpty: false },
        AdditionalDocument: { type: Sequelize.STRING, notEmpty: false },
        VentureID: { type: Sequelize.INTEGER, notEmpty: true },
        TenantID: { type: Sequelize.STRING, notEmpty: false },
        ContractAddress: { type: Sequelize.STRING, notEmpty: false },
        TransactionHash: { type: Sequelize.STRING, notEmpty: false },
        RequestID: { type: Sequelize.STRING, notEmpty: false },
        RefundContractAddress: { type: Sequelize.STRING, notEmpty: false },
        Created: { type: Sequelize.DATE, notEmpty: false },
        Modified: { type: Sequelize.DATE, notEmpty: false },
        Status: { type: Sequelize.STRING, notEmpty: false },
        AssetID: { type: Sequelize.INTEGER, notEmpty: false },
        InvestorCount: { type: Sequelize.INTEGER, notEmpty: false },
        Investment: { type: Sequelize.DECIMAL, notEmpty: false },
        ROI: { type: Sequelize.STRING, notEmpty: false },
        Trust: { type: Sequelize.STRING, notEmpty: false },
        Risk: { type: Sequelize.STRING, notEmpty: false },
        ROI3Years: { type: Sequelize.STRING, notEmpty: false },
    });
    return Campaign;
};
//# sourceMappingURL=Campaign.js.map