module.exports = function(sequelize, Sequelize) {
    const KYC = sequelize.define('KYC', {  
        KycID : { type: Sequelize.INTEGER ,autoIncrement: true, primaryKey: true, notEmpty:true},
        FirstName : { type: Sequelize.STRING , notEmpty:false},
        MiddleName : { type: Sequelize.STRING , notEmpty:false},
        LastName : { type: Sequelize.STRING , notEmpty:false},
        PreviousName : { type: Sequelize.STRING , notEmpty:false},
        Email : { type: Sequelize.STRING , notEmpty:false},
        Mobile : { type: Sequelize.STRING , notEmpty:false},
        Nationality : { type: Sequelize.STRING , notEmpty:false},
        Occupation : { type: Sequelize.STRING , notEmpty:false},
        SourceOfFunds : { type: Sequelize.STRING , notEmpty:false},
        Passport : { type: Sequelize.STRING , notEmpty:false},
        PassportExpiryDate : { type: Sequelize.DATE , notEmpty:false},
        SelfiImage : { type: Sequelize.STRING , notEmpty:false},
        IdentificationDocument : { type: Sequelize.STRING , notEmpty:false},
        IdentificationDocumentBack : { type: Sequelize.STRING , notEmpty:false},
        IdentificationDocumentExpiryDate : { type: Sequelize.DATE , notEmpty:false},
        LineAddress : { type: Sequelize.STRING , notEmpty:false},
        City : { type: Sequelize.STRING , notEmpty:false},
        Country : { type: Sequelize.STRING , notEmpty:false},
        ProofOfAddress : { type: Sequelize.STRING , notEmpty:false},
        ProofOfAddressIssueDate : { type: Sequelize.DATE , notEmpty:false},
        TenantID : { type: Sequelize.STRING , notEmpty:false},
        RequestID : { type: Sequelize.STRING , notEmpty:false},
        KycChainUserID : { type: Sequelize.STRING , notEmpty:false},
        KycStatus : { type: Sequelize.STRING , notEmpty:false},
        Created : { type: Sequelize.DATE , notEmpty:false},
        Modified : { type: Sequelize.DATE , notEmpty:false},    
    });
 
    return KYC;
 }

