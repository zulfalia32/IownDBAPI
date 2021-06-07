export {};
const deleteHandler = require("./deleteHandler");
const models = require('../../models');
const helper = require("./helper");
const {sendMessage} = require("../../util/messageHandler");
const {messageBook} = require("../../constants/messageBook");

class MainController {  
  async deleteData(req , res ){    
     try {
      const valaidateJson = await  helper.ValidateInputJson(req , res, 'DELETE')
          if (valaidateJson == true){
            switch(req.body.Entity) {
              case "BCEvent":
                deleteHandler.Delete(req, res, models.BCEvent);
                break;
              case "Campaign":
                deleteHandler.Delete(req, res, models.Campaign);
                break;
              case "Company":
                deleteHandler.Create(req, res, models.Company);
                break;
              case "Dividend":
                deleteHandler.Create(req, res, models.Dividend);
                break;
              case "Fundraiser":
                deleteHandler.Create(req, res, models.Fundraiser);
                break;
              case "GuestFundraiser":
                deleteHandler.Create(req, res, models.GuestFundraiser);
                break;
              case "Investor":
                deleteHandler.Create(req, res, models.Investor);
                break;
              case "InvestorBankInfo":
                deleteHandler.Create(req, res, models.InvestorBankInfo);
                break;
              case "InvestorTransaction":
                deleteHandler.Create(req, res, models.InvestorTransaction);
                break;
              case "InvestorTransfer":
                deleteHandler.Create(req, res, models.InvestorTransfer);
                break;
              case "IOwner":
                deleteHandler.Create(req, res, models.IOwner);
                break;
              case "KYC":
                deleteHandler.Create(req, res, models.KYC);
                break;
              case "Pledge":
                deleteHandler.Create(req, res, models.Pledge);
                break;
              case "Property":
                deleteHandler.Create(req, res, models.Property);
                break;
              case "PropertyPledge":
                deleteHandler.Create(req, res, models.PropertyPledge);
                break;
              case "Share":
                deleteHandler.Create(req, res, models.Share);
                break;
              case "Venture":
                deleteHandler.Create(req, res, models.Venture);
                break;                  
              default:
                sendMessage(req, res,"IN4MA", "1", 0, messageBook.MODEL_NOT_FOUND);
            }
        }     
     } catch (error) {
      sendMessage(req, res,"IN4MA","2", `Error message from delete.ts:deleteData():${error.message}`);
    };      
  };
};

const deleteData = new MainController()
module.exports = deleteData;


