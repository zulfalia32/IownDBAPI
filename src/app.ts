export {};
require("dotenv").config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const router = require('./routes/route');
const app = express();

const Database = require('./database/database');

const models = require('./models');

const logger = require('./util/winston');

app.use(cors())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// setup the logger
app.use(morgan('combined', { stream: logger.stream }));

app.use(router)
//

const port = process.env.PORT || 3000;
Database.connectDatabase();

models.sequelize.sync().then(() => {
    app.listen(port , (err) => {
        if(err)
          {
            logger.error(`${err.status || 500} - ${err.message}`);
          }
        else
          {
            logger.info('Server started running on : ' + port);
          }
        })
   });

   app.get('/api/test',function(req,res)
   {
       res.send('Hello World!, This application is up and running at port: ' + port);
   });

  
 
