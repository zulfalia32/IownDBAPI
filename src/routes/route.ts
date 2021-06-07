const express =  require('express');

const createController = require('../controllers/record/create')
const readController =   require('../controllers/record/read')
const updateController = require('../controllers/record/update')
const deleteController = require('../controllers/record/delete')

const router = express.Router();

router.post('/api/create-data' , createController.createData);
router.post('/api/read-data' ,   readController.readData);
router.post('/api/update-data' , updateController.updateData);
router.post('/api/delete-data' , deleteController.deleteData);

module.exports = router;