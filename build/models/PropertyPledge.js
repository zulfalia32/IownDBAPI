"use strict";
module.exports = function (sequelize, Sequelize) {
    var PropertyPledge = sequelize.define('PropertyPledge', {
        PledgeID: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, notEmpty: true },
        PropertyID: { type: Sequelize.INTEGER, notEmpty: false },
        TenantID: { type: Sequelize.STRING, notEmpty: false },
        RequestID: { type: Sequelize.STRING, notEmpty: false },
        Amount: { type: Sequelize.DECIMAL, notEmpty: false },
        PercentOfCampaignTarget: { type: Sequelize.FLOAT, notEmpty: false },
        ProcessingFee: { type: Sequelize.FLOAT, notEmpty: false },
        AssetID: { type: Sequelize.INTEGER, notEmpty: false },
        Created: { type: Sequelize.DATE, notEmpty: false },
    });
    return PropertyPledge;
};
//# sourceMappingURL=PropertyPledge.js.map