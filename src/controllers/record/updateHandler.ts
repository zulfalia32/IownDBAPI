export {};
const models = require('../../models');
const Op = models.Sequelize.Op;
const helper = require("./helper");
const {sendMessage} = require("../../util/messageHandler");

class UpdateController {  
  async Update(req , res, ModelName ){   
      const values = await helper.GetQueryStringValues(req , res );
      const selecter = await helper.GetQueryStringSelecter(req , res );
      const countOfRowsUpdated = await ModelName.update(JSON.parse(values), selecter, {limit : Number(req.body.Limit)})
      .then(countOfRowsUpdated  => {
            sendMessage(req, res,"IN4MA","0", countOfRowsUpdated,"");
            })
      .catch(err => {
              sendMessage(req, res,"IN4MA","2", err.message || "Some error occurred while executing UpdateController.Update.");
            });
  };
};

const updateHandler= new UpdateController()
module.exports = updateHandler;



