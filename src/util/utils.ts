// This program file is not in use at the moment

const models = require('../models');
export class utils {
    /**
     * @name getTableName
     * @description Get the TableNme from the Request Object
     * @param {string} Entity
     * @return {string}
     */
     public static getTableName(entity): typeof models {
       console.log("from utils.ts entity = " + entity)
        switch(entity) {
            case "BCEvent":
              return models.BCEvent;
              break;
            case "Campaign":
                return models.Campaign;
              break;
            default:
              return "Table name can not be determined!!"; 
       }
    }
  }

