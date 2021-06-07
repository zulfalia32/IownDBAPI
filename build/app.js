"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var morgan = require('morgan');
var router = require('./routes/route');
var app = express();
var Database = require('./database/database');
var models = require('./models');
var logger = require('./util/winston');
app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
// setup the logger
app.use(morgan('combined', { stream: logger.stream }));
app.use(router);
//
var port = 3000;
Database.connectDatabase();
models.sequelize.sync().then(function () {
    app.listen(port, function (err) {
        if (err) {
            logger.error((err.status || 500) + " - " + err.message);
        }
        else {
            logger.info('Server started running on : ' + port);
        }
    });
    app.get('/api/test', function (req, res) {
        res.send('Hello World!, This application is up and running at port: ' + port);
    });
});
//# sourceMappingURL=app.js.map