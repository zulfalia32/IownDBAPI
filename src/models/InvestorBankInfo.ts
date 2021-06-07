module.exports = function(sequelize, Sequelize) {
    const InvestorBankInfo = sequelize.define('InvestorBankInfo', { 
        BankInfoID : { type: Sequelize.INTEGER ,autoIncrement: true, primaryKey: true, notEmpty:true},
        InvestorBankName : { type: Sequelize.STRING , notEmpty:false},
        InvestorBankBranch : { type: Sequelize.STRING , notEmpty:false},
        InvestorBankIBAN : { type: Sequelize.STRING , notEmpty:false},
        InvestorBankSwift : { type: Sequelize.STRING , notEmpty:false},
        InvestorBankAddress : { type: Sequelize.STRING , notEmpty:false},
        InvestorAccountHolderName : { type: Sequelize.STRING , notEmpty:false},
        HasCorrespondingBank : { type: Sequelize.STRING , notEmpty:false},
        CorrespondingBankName : { type: Sequelize.STRING , notEmpty:false},
        CorrespondingBankSwift : { type: Sequelize.STRING , notEmpty:false},
        TenantID : { type: Sequelize.STRING , notEmpty:false},
        RequestID : { type: Sequelize.STRING , notEmpty:false},
        InvestorID : { type: Sequelize.STRING , notEmpty:false},
           
    });
 
    return InvestorBankInfo;
 }

