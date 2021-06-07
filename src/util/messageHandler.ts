export {};
const logger = require("./winston");

class MessageHandler{
  
  sendMessage (req , res, intigrationWithFlag, statusCode, rowsAffected, messageDetail) {

    if (intigrationWithFlag == "IN4MA"){     
      
        if (statusCode == "0") {
          res.status(200).send((JSON.stringify({Status : statusCode, Message :"Success", RowsAffected : `${rowsAffected}`, Detail :`RowsAffected ${rowsAffected}`, RequestID :`${req.body.RequestID}`, TenantID :`${req.body.TenantID}`, RecordSet : `${JSON.stringify(messageDetail.rows)}`})).replace(/\\/g, "").replace("]\"", "]'").replace("\"[", "\'["));
        }

        if (statusCode =="1") {
          logger.error( `${messageDetail}` );             
          res.status(200).json({Status : statusCode, Message : "NoSuccess", RowsAffected : `0`, Detail : `${messageDetail}` });
        }           
        
        console.log("statusCode = "+ statusCode )
        if (statusCode =="2") {
          logger.error( `${messageDetail}` );  
          res.status(500).json({Status : "1", Message :"NoSuccess", RowsAffected : `0`, Detail : `${messageDetail}`});
        }
    } 

  }
}

const messageHandler = new MessageHandler()
module.exports = messageHandler;



