module.exports = function(sequelize, Sequelize) {
    const BCEvent = sequelize.define('BCEvent', {   
        ID : { type: Sequelize.INTEGER , notEmpty:true, primaryKey: true,autoIncrement: true,},
        Concept : { type: Sequelize.STRING , notEmpty:true},
        ConceptID : { type: Sequelize.INTEGER , notEmpty:true},
        TenantID : { type: Sequelize.INTEGER , notEmpty:true},
        RequestID : { type: Sequelize.INTEGER , notEmpty:false},
        TransactionHash : { type: Sequelize.STRING , notEmpty:false},
        ContractAddress : { type: Sequelize.STRING , notEmpty:false},
        Created : { type: Sequelize.DATE , notEmpty:false},
        Modified : { type: Sequelize.DATE , notEmpty:false},
        
    });
 
    return BCEvent;
 }

