module.exports = function(sequelize, Sequelize) {
    const Company = sequelize.define('Company', {   
        CompanyID : { type: Sequelize.INTEGER , autoIncrement: true, primaryKey: true, notEmpty:true},
        CompanyRole : { type: Sequelize.STRING , notEmpty:false},
        CountryOfIncorporation : { type: Sequelize.STRING , notEmpty:false},
        YearOfIncorporation : { type: Sequelize.STRING , notEmpty:false},
        Industry : { type: Sequelize.STRING , notEmpty:false},
        CompanyAge : { type: Sequelize.STRING , notEmpty:false},
        RequestedFundingRange : { type: Sequelize.STRING , notEmpty:false},
        ReasonsInvestBusiness : { type: Sequelize.STRING , notEmpty:false},
        CompanyName : { type: Sequelize.STRING , notEmpty:false},
        CompanyLogo : { type: Sequelize.STRING , notEmpty:false},
        CompanySlogan : { type: Sequelize.STRING , notEmpty:false},
        AboutCompany : { type: Sequelize.STRING , notEmpty:false},
        CompanyRegistrationType : { type: Sequelize.STRING , notEmpty:false},
        CompanySize : { type: Sequelize.STRING , notEmpty:false},
        BusinessStage : { type: Sequelize.STRING , notEmpty:false},
        FundRaisedSoFar : { type: Sequelize.STRING , notEmpty:false},
        SourceOfFunds : { type: Sequelize.STRING , notEmpty:false},
        ReasonForRaisingFunds : { type: Sequelize.STRING , notEmpty:false},
        WebsiteURL : { type: Sequelize.STRING , notEmpty:false},
        FacebookURL : { type: Sequelize.STRING , notEmpty:false},
        TwitterURL : { type: Sequelize.STRING , notEmpty:false},
        LinkedinURL : { type: Sequelize.STRING , notEmpty:false},
        YoutubeURL : { type: Sequelize.STRING , notEmpty:false},
        InstagramURL : { type: Sequelize.STRING , notEmpty:false},
        TeamMembers : { type: Sequelize.STRING , notEmpty:false},
        CompanyTradeLicense : { type: Sequelize.STRING , notEmpty:false},
        BusinessPlan : { type: Sequelize.STRING , notEmpty:false},
        Financials : { type: Sequelize.STRING , notEmpty:false},
        AuditReport : { type: Sequelize.STRING , notEmpty:false},
        ValutionReport : { type: Sequelize.STRING , notEmpty:false},
        BankLetterOrStatement : { type: Sequelize.STRING , notEmpty:false},
        AdditionalDocument : { type: Sequelize.STRING , notEmpty:false},
        CompanyLogoPostRule : { type: Sequelize.STRING , notEmpty:false},
        FundraiserID : { type: Sequelize.INTEGER , notEmpty:true},
        TenantID : { type: Sequelize.STRING , notEmpty:false},
        ContractAddress : { type: Sequelize.STRING , notEmpty:false},
        TransactionHash : { type: Sequelize.STRING , notEmpty:false},
        RequestID : { type: Sequelize.STRING , notEmpty:false},
        Created : { type: Sequelize.DATE , notEmpty:false},
        Modified : { type: Sequelize.DATE , notEmpty:false},
        Status : { type: Sequelize.STRING , notEmpty:false},
        AssetID : { type: Sequelize.INTEGER , notEmpty:false},

        
    });
 
    return Company;
 }

