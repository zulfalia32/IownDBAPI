module.exports = function(sequelize, Sequelize) {
    const IOwner = sequelize.define('IOwner', {   
        IOwnerID : { type: Sequelize.INTEGER ,autoIncrement: true, primaryKey: true, notEmpty:true},
        IOwnerName : { type: Sequelize.STRING , notEmpty:false},
        DOB : { type: Sequelize.DATE , notEmpty:false},
        Nationality : { type: Sequelize.STRING , notEmpty:false},
        CountryOfResidence : { type: Sequelize.STRING , notEmpty:false},
        PersonalPhoto : { type: Sequelize.STRING , notEmpty:false},
        ProofOfIdentification : { type: Sequelize.STRING , notEmpty:false},
        ProofOfAddress : { type: Sequelize.STRING , notEmpty:false},
        ProofOfResidency : { type: Sequelize.STRING , notEmpty:false},
        Gender : { type: Sequelize.STRING , notEmpty:false},
        TenantID : { type: Sequelize.STRING , notEmpty:true},
        ContractAddress : { type: Sequelize.STRING , notEmpty:false},
        TransactionHash : { type: Sequelize.STRING , notEmpty:false},
        RequestID : { type: Sequelize.STRING , notEmpty:false},
        Created : { type: Sequelize.DATE , notEmpty:false},
        Modified : { type: Sequelize.DATE , notEmpty:false},
        Status : { type: Sequelize.STRING , notEmpty:false},
        
    });
 
    return IOwner;
 }

