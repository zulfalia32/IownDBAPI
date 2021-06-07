"use strict";
var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var dbConfig = require('../database/db.config');
var db = {};
var sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    dialect: 'mssql',
    port: dbConfig.PORT,
    storage: ':memory:',
    operatorsAliases: 0,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    },
    define: {
        timestamps: false,
        freezeTableName: true
    },
});
fs
    .readdirSync(__dirname)
    .filter(function (file) { return (file.indexOf(".") !== 0) && (file !== 'index.ts'); })
    .forEach(function (file) {
    var model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    console.log("file name is = " + file);
    db[model.name] = model;
});
Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
//# sourceMappingURL=index.js.map