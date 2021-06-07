"use strict";
module.exports = function (sequelize, Sequelize) {
    var Country = sequelize.define('Country', {
        CountryID: { type: Sequelize.INTEGER, notEmpty: true },
        Country: { type: Sequelize.STRING, notEmpty: false },
        Code2: { type: Sequelize.STRING, notEmpty: false },
        Code3: { type: Sequelize.STRING, notEmpty: false },
    });
    return Country;
};
//# sourceMappingURL=Country.js.map