"use strict";
module.exports = function (sequelize, Sequelize) {
    var Share = sequelize.define('Share', {
        ShareID: { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true, notEmpty: true },
        VentureID: { type: Sequelize.INTEGER, notEmpty: true },
        CampaignID: { type: Sequelize.INTEGER, notEmpty: true },
        PledgeId: { type: Sequelize.INTEGER, notEmpty: true },
        NumberOfShares: { type: Sequelize.DECIMAL, notEmpty: false },
        Uowns: { type: Sequelize.DECIMAL, notEmpty: false },
        Iowns: { type: Sequelize.DECIMAL, notEmpty: false },
        Date: { type: Sequelize.DATE, notEmpty: false },
        TenantID: { type: Sequelize.STRING, notEmpty: false },
        Created: { type: Sequelize.DATE, notEmpty: false },
        Modified: { type: Sequelize.DATE, notEmpty: false },
        Status: { type: Sequelize.STRING, notEmpty: false },
    });
    return Share;
};
//# sourceMappingURL=Share.js.map