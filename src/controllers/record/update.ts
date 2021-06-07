export {};
const updateHandler = require("./updateHandler");
const models = require('../../models');
const helper = require('./helper');
const {sendMessage} = require("../../util/messageHandler");
const {messageBook} = require("../../constants/messageBook");

class MainController {  
  async updateData(req , res ){    
     try {
      const valaidateJson = await  helper.ValidateInputJson(req , res, 'UPDATE')
          if (valaidateJson == true){
            switch(req.body.Entity) {
              case "BCEvent":
                updateHandler.Update(req, res, models.BCEvent);
                break;
              case "Campaign":
                updateHandler.Update(req, res, models.Campaign);
                break;
              case "Company":
                updateHandler.Create(req, res, models.Company);
                break;
              case "Dividend":
                updateHandler.Create(req, res, models.Dividend);
                break;
              case "Fundraiser":
                updateHandler.Create(req, res, models.Fundraiser);
                break;
              case "GuestFundraiser":
                updateHandler.Create(req, res, models.GuestFundraiser);
                break;
              case "Investor":
                updateHandler.Create(req, res, models.Investor);
                break;
              case "InvestorBankInfo":
                updateHandler.Create(req, res, models.InvestorBankInfo);
                break;
              case "InvestorTransaction":
                updateHandler.Create(req, res, models.InvestorTransaction);
                break;
              case "InvestorTransfer":
                updateHandler.Create(req, res, models.InvestorTransfer);
                break;
              case "IOwner":
                updateHandler.Create(req, res, models.IOwner);
                break;
              case "KYC":
                updateHandler.Create(req, res, models.KYC);
                break;
              case "Pledge":
                updateHandler.Create(req, res, models.Pledge);
                break;
              case "Property":
                updateHandler.Create(req, res, models.Property);
                break;
              case "PropertyPledge":
                updateHandler.Create(req, res, models.PropertyPledge);
                break;
              case "Share":
                updateHandler.Create(req, res, models.Share);
                break;
              case "Venture":
                updateHandler.Create(req, res, models.Venture);
                break;                
              default:
                sendMessage(req, res,"IN4MA", "1", 0, messageBook.MODEL_NOT_FOUND);
            }
        }     
     } catch (error) {
      sendMessage(req, res,"IN4MA","2", `Error message from update.ts:updateData():${error.message}`);
    };      
  };
};

const updateData = new MainController()
module.exports = updateData;


