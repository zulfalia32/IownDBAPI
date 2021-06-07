module.exports = function(sequelize, Sequelize) {
    const Pledge = sequelize.define('Pledge', {  
        PledgeID : { type: Sequelize.INTEGER ,autoIncrement: true, primaryKey: true, notEmpty:true},
        CampaignContractAddress : { type: Sequelize.STRING , notEmpty:true},
        CampaignID : { type: Sequelize.INTEGER , notEmpty:false},
        WalletAddress : { type: Sequelize.STRING , notEmpty:true},
        IownBalance : { type: Sequelize.DECIMAL , notEmpty:false},
        USDIOwnRate : { type: Sequelize.DECIMAL , notEmpty:false},
        IownToPledge : { type: Sequelize.DECIMAL , notEmpty:false},
        ContractAddress : { type: Sequelize.STRING , notEmpty:false},
        TransactionHash : { type: Sequelize.STRING , notEmpty:false},
        TenantID : { type: Sequelize.STRING , notEmpty:false},
        RequestID : { type: Sequelize.STRING , notEmpty:false},
        Created : { type: Sequelize.DATE , notEmpty:false},
        Modified : { type: Sequelize.DATE , notEmpty:false},
        Status : { type: Sequelize.STRING , notEmpty:false},
        TotalGas : { type: Sequelize.DECIMAL , notEmpty:false},
        PaymentProcessingFees : { type: Sequelize.DECIMAL , notEmpty:false},
        AmountToPledge : { type: Sequelize.DECIMAL , notEmpty:false},    
    });
 
    return Pledge;
 }

