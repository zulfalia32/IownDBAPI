export {};
const createHandler = require("./createHandler");
const models = require('../../models');
const helper = require('./helper');
const {sendMessage} = require("../../util/messageHandler");
const {messageBook} = require("../../constants/messageBook");

class MainController {  
  async createData(req , res ){    
     try {
      const valaidateJson = await  helper.ValidateInputJson(req , res, 'INSERT')
          if (valaidateJson == true){
            switch(req.body.Entity) {
              case "BCEvent":
                createHandler.Create(req, res, models.BCEvent);
                break;
              case "Campaign":
                createHandler.Create(req, res, models.Campaign);
                break;
              case "Company":
                createHandler.Create(req, res, models.Company);
                break;
              case "Dividend":
                createHandler.Create(req, res, models.Dividend);
                break;
              case "Fundraiser":
                createHandler.Create(req, res, models.Fundraiser);
                break;
              case "GuestFundraiser":
                createHandler.Create(req, res, models.GuestFundraiser);
                break;
              case "Investor":
                createHandler.Create(req, res, models.Investor);
                break;
              case "InvestorBankInfo":
                createHandler.Create(req, res, models.InvestorBankInfo);
                break;
              case "InvestorTransaction":
                createHandler.Create(req, res, models.InvestorTransaction);
                break;
              case "InvestorTransfer":
                createHandler.Create(req, res, models.InvestorTransfer);
                break;
              case "IOwner":
                createHandler.Create(req, res, models.IOwner);
                break;
              case "KYC":
                createHandler.Create(req, res, models.KYC);
                break;
              case "Pledge":
                createHandler.Create(req, res, models.Pledge);
                break;
              case "Property":
                createHandler.Create(req, res, models.Property);
                break;
              case "PropertyPledge":
                createHandler.Create(req, res, models.PropertyPledge);
                break;
              case "Share":
                createHandler.Create(req, res, models.Share);
                break;
              case "Venture":
                createHandler.Create(req, res, models.Venture);
                break;
              default:
                sendMessage(req, res,"IN4MA", "1", 0, messageBook.MODEL_NOT_FOUND);
            }
        }     
     } catch (error) {
      sendMessage(req, res,"IN4MA","2", `Error message from create.ts:createData():${error.message}`);
    };      
  };
};

const createData = new MainController()
module.exports = createData;


