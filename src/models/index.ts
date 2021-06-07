const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const dbConfig = require('../database/db.config');

let db: any = {};
let  sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
    
    host: dbConfig.HOST,
    dialect: 'mssql',
    port: dbConfig.PORT,
    storage: ':memory:',
    operatorsAliases: 0, // change this to zero
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
   .filter(file => (file.indexOf(".") !== 0) && (file !== 'index.ts'))
   .forEach(file => {
       let model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
       console.log("file name is = " + file);
       db[model.name] = model;
   });

Object.keys(db).forEach(modelName => {
   if("associate" in db[modelName]) {
       db[modelName].associate(db);
   }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;