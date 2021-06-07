"use strict";
var express = require('express');
// app.get('/', (req, res) => res.send('Notes App'));
// app.get('/notes', function(req, res) {
//   Note.findAll().then(notes => res.json(notes));
// });
//const createController = require('../controller/Record/create')
var readController = require('../controllers/Record/BCEvent');
//const updateController = require('../controller/Record/update')
//const deleteController = require('../controller/Record/delete')
var router = express.Router();
//router.post('/api/createData' , createController.createData);
router.post('/api/readData', readController.findAll);
//router.post('/api/readData' , 'hello');
//router.post('/api/updateData' , updateController.updateData);
//router.post('/api/deleteData' , deleteController.deleteData);
module.exports = router;
//# sourceMappingURL=read.js.map