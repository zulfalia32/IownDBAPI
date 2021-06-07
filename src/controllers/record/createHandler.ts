export {};
const models = require('../../models');
const Op = models.Sequelize.Op;
const helper = require("./helper");
const {sendMessage} = require("../../util/messageHandler");

class CreateController {  
  async Create(req , res, ModelName ){   
      const query = await helper.GetQueryString(req , res )
      const countOfRowsInserted = await ModelName.create(JSON.parse(query))
      .then(countOfRowsInserted  => {
            countOfRowsInserted = 1;
            sendMessage(req, res,"IN4MA","0", countOfRowsInserted, "");
            })
      .catch(err => {
              sendMessage(req, res,"IN4MA","2", err.message || "Some error occurred while executing CreateController.Create.");
            });
  };
};

const CreateHandler= new CreateController()
module.exports = CreateHandler;



