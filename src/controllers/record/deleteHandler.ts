export {};
const models = require('../../models');
const Op = models.Sequelize.Op;
const Helper = require("./Helper");
const {sendMessage} = require("../../util/messageHandler");

class DeleteController {  
  async Delete(req , res, ModelName ){   
      const query = await Helper.GetQueryString(req , res )
      const countOfRowsDeleted  = await ModelName.destroy({limit : Number(req.body.Limit), where: JSON.parse(query) })
      .then(countOfRowsDeleted  => {
            sendMessage(req, res,"IN4MA","0", countOfRowsDeleted, "");
            })
      .catch(err => {
              sendMessage(req, res,"IN4MA","2", err.message || "Some error occurred while executing DeleteController.Delete.");
            });
  };
};

const DeleteHandler= new DeleteController()
module.exports = DeleteHandler;



