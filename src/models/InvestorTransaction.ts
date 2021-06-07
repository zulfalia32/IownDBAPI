module.exports = function(sequelize, Sequelize) {
    const InvestorTransaction = sequelize.define('InvestorTransaction', {  
        TransactionID : { type: Sequelize.INTEGER ,autoIncrement: true, primaryKey: true, notEmpty:false},
        BalanceBeforeTransaction : { type: Sequelize.STRING , notEmpty:true},
        BalanceAfterTransaction : { type: Sequelize.STRING , notEmpty:true},
        Amount : { type: Sequelize.STRING , notEmpty:true},
        TransactionType : { type: Sequelize.STRING , notEmpty:true},
        Status : { type: Sequelize.STRING , notEmpty:true},
        Created : { type: Sequelize.DATE , notEmpty:true},
        Modified : { type: Sequelize.DATE , notEmpty:true},
        RequestID : { type: Sequelize.STRING , notEmpty:true},
        TenantID : { type: Sequelize.STRING , notEmpty:true},          
    });
 
    return InvestorTransaction;
 }

