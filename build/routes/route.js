"use strict";
var express = require('express');
var createController = require('../controllers/record/create');
var readController = require('../controllers/record/read');
var updateController = require('../controllers/record/update');
var deleteController = require('../controllers/record/delete');
var router = express.Router();
router.post('/api/create-data', createController.createData);
router.post('/api/read-data', readController.readData);
router.post('/api/update-data', updateController.updateData);
router.post('/api/delete-data', deleteController.deleteData);
module.exports = router;
//# sourceMappingURL=route.js.map