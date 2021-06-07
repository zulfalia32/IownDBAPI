export {};
const readHandler = require("./readHandler");
const models = require('../../models');
const helper = require("./helper");
const {sendMessage} = require("../../util/messageHandler");
const {messageBook} = require("../../constants/messageBook");

class MainController {  
  async readData(req , res ){    
     try {
      const valaidateJson = await  helper.ValidateInputJson(req , res, 'READ')
          if (valaidateJson == true){
            switch(req.body.Entity) {
              case "BCEvent":
                readHandler.Read(req, res, models.BCEvent);
                break;
              case "Campaign":
                readHandler.Read(req, res, models.Campaign);
                break;
              case "Company":
                readHandler.Read(req, res, models.Company);
                break;
              case "Dividend":
                readHandler.Read(req, res, models.Dividend);
                break;
              case "Fundraiser":
                readHandler.Read(req, res, models.Fundraiser);
                break;
              case "GuestFundraiser":
                readHandler.Read(req, res, models.GuestFundraiser);
                break;
              case "Investor":
                readHandler.Read(req, res, models.Investor);
                break;
              case "InvestorBankInfo":
                readHandler.Read(req, res, models.InvestorBankInfo);
                break;
              case "InvestorTransaction":
                readHandler.Read(req, res, models.InvestorTransaction);
                break;
              case "InvestorTransfer":
                readHandler.Read(req, res, models.InvestorTransfer);
                break;
              case "IOwner":
                readHandler.Read(req, res, models.IOwner);
                break;
              case "KYC":
                readHandler.Read(req, res, models.KYC);
                break;
              case "Pledge":
                readHandler.Read(req, res, models.Pledge);
                break;
              case "Property":
                readHandler.Read(req, res, models.Property);
                break;
              case "PropertyPledge":
                readHandler.Read(req, res, models.PropertyPledge);
                break;
              case "Share":
                readHandler.Read(req, res, models.Share);
                break;
              case "Venture":
                readHandler.Read(req, res, models.Venture);
                break;
              default:
                sendMessage(req, res,"IN4MA", "1", 0, messageBook.MODEL_NOT_FOUND);                
            }
        }     
     } catch (error) {
      sendMessage(req, res,"IN4MA","2", `Error message from read.ts:readData():${error.message}`);
    };      
  };
};

const readData = new MainController()
module.exports = readData;


