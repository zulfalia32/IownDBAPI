export {};
const models = require('../../models');
const Op = models.Sequelize.Op;
const helper = require("./helper");
const {sendMessage} = require("../../util/messageHandler");


class ReadController {  
  async Read(req , res, ModelName ){   
      const query = await helper.GetQueryString(req , res)
      const result  = await ModelName.findAndCountAll({limit : Number(req.body.Limit), where: JSON.parse(query) })
      .then(result  => {
            sendMessage(req, res,"IN4MA","0", result.count, result);
            })
      .catch(err => {
              sendMessage(req, res,"IN4MA","2", err.message || "Some error occurred while executing ReadContoller.Read.");
            });
  };
};

const ReadHandler= new ReadController()
module.exports = ReadHandler;



