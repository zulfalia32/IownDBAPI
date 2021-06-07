export {};
const {sendMessage} = require("../../util/messageHandler");
const {messageBook} = require("../../constants/messageBook");


class HelperController {  
  async ValidateInputJson(req , res, flag ){   
      
      if(req.body.RequestID == null || String(req.body.RequestID).trim() == "")  {
        sendMessage(req, res,"IN4MA","1", messageBook.ATTRIBUTES_REQUIRED_1);
        return false; 
      };
      
      if (req.body.TenantID == null || String(req.body.TenantID).trim()=="") {
        sendMessage(req, res,"IN4MA","1", messageBook.ATTRIBUTES_REQUIRED_2);
        return false;
      };

      if (req.body.Entity == null || String(req.body.Entity).trim()=="") {
        sendMessage(req, res,"IN4MA","1", messageBook.ATTRIBUTES_REQUIRED_3);
        return false;
      };

      if (req.body.Limit == null || String(req.body.Limit).trim() =="" ) {      
        sendMessage(req, res,"IN4MA","1", messageBook.ATTRIBUTES_REQUIRED_4);
        return false;
      };

     if (flag == 'UPDATE'){

        if (req.body.Parameters == null || req.body.Parameters =="" ) {      
          sendMessage(req, res,"IN4MA","1", messageBook.ATTRIBUTES_REQUIRED_5);
          return false;
        };

    }

      return true;

  };
 
   async GetQueryString(req , res ){   
    const [requestID, tenantID, paramArrayObject, limit ] = [req.body.RequestID, req.body.TenantID, req.body.Parameters, Number(req.body.Limit)]; 
  
    let jsonData = '';
    jsonData = ` { \"TenantID\" : \"${tenantID}\" ` ;
    jsonData =  jsonData  + ` ,\"RequestID\" : \"${requestID}\" ` ;  

     
    //for-of loop to loop through entries 
    if (req.body.Parameters != null) {     
      for (const [key, objectValue] of Object.entries(paramArrayObject)) {
        for (const [parameterName, parameterValue] of Object.entries(objectValue as {})) {
          jsonData = jsonData  + ` , \"${parameterName}\" : \"${parameterValue}\" ` ;
        }
      }
    }     
    jsonData = jsonData + ` }`;

    //console.log( JSON.parse(jsonData) );

    return jsonData;   
  };

  async GetQueryStringValues(req , res ){   
    const [requestID, tenantID, paramArrayObject, limit ] = [req.body.RequestID, req.body.TenantID, req.body.Parameters, Number(req.body.Limit)]; 
  
    let jsonData = '';
    let loopCount = 0; 
   
    //for-of loop to loop through entries 
    if (req.body.Parameters != null) {     
      for (const [key, objectValue] of Object.entries(paramArrayObject)) {
        for (const [parameterName, parameterValue] of Object.entries(objectValue as {})) {
          if (loopCount == 0) {
            jsonData =  ` { \"${parameterName}\" : \"${parameterValue}\" ` ;
            loopCount = loopCount + 1;
          } else {
            jsonData = jsonData  + ` , \"${parameterName}\" : \"${parameterValue}\" ` ;
            loopCount = loopCount + 1;
          }
        }
      }
    }     
    jsonData = jsonData + ` }`;

    console.log(" (values) columns or attributes to be updated (SET part of the update query) = " + JSON.parse(jsonData) ); 

    return jsonData;   
  };

 

  
  async GetQueryStringSelecter(req , res ){   
    const [requestID, tenantID, paramArrayObject, limit ] = [req.body.RequestID, req.body.TenantID, req.body.Parameters, Number(req.body.Limit)]; 
  
    var query = Array();
    var queryObject = new Object();

    queryObject = {TenantID:  `${tenantID}` };
    query.push(queryObject);

    queryObject = { RequestID: `${requestID}` };
    query.push(queryObject);    

    const selector = {    where:  query     };
   
    console.log("selector (WHERE clause columns or attributes )  = " + JSON.stringify(selector) );   
    return selector;

  };

};

const Helper= new HelperController()
module.exports = Helper;



