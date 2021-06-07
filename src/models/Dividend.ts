module.exports = function(sequelize, Sequelize) {
    const Dividend = sequelize.define('Dividend', {  
        DividendID : { type: Sequelize.INTEGER ,autoIncrement: true, primaryKey: true, notEmpty:true},
        VentureID : { type: Sequelize.INTEGER , notEmpty:true},
        Amount : { type: Sequelize.DECIMAL , notEmpty:false},
        Date : { type: Sequelize.DATE , notEmpty:false},
        TenantID : { type: Sequelize.STRING , notEmpty:false},
        Created : { type: Sequelize.DATE , notEmpty:false},
        Modified : { type: Sequelize.DATE , notEmpty:false},
        Status : { type: Sequelize.STRING , notEmpty:false},
       
    });
 
    return Dividend;
 }

