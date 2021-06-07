export {};
require("dotenv").config();
let dbConfig = require("./db.config");
const Sequelize = require('sequelize');
const logger = require("../util/winston");

class DatabaseController { 

async  connectDatabase() {
  //Connection Type = Development
  if (process.env.NODE_ENV === "development"){  
      console.log("This is a development run");
      const  sequelize = await new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: 'mssql',
        port: dbConfig.PORT,
        storage: ':memory:',
        operatorsAliases: 0, // change this to zero
                    pool: {
                    max: dbConfig.pool.max,
                    min: dbConfig.pool.min,
                    acquire: dbConfig.pool.acquire,
                    idle: dbConfig.pool.idle
                    },
        define: {
                    timestamps: false,
                    freezeTableName: true
                },
    });

    sequelize.authenticate()
    .then(() => {
      logger.info('Database Connection has been established successfully.'); 
    })
    .catch(err => {
      logger.error('Unable to connect to the database:', err);
    });

  } 

  //Connection Type = Production

  if (process.env.NODE_ENV === "production"){  
    console.log("This is a production run");
    // get dbConfig from Azure
    const { getSecret } = require("../../azure/azure-keyvault");
    const KEY_VAULT_NAME = process.env.KEY_VAULT_NAME;
    const DATABASE_USER = process.env.DATABASE_USER;
    const DATABASE_PASS = process.env.DATABASE_PASS;
    const DATABASE_HOST = process.env.DATABASE_HOST;
    const DATABASE_PORT = process.env.DATABASE_PORT;
    const DATABASE_NAME = process.env.DATABASE_NAME;

    if (!KEY_VAULT_NAME || !DATABASE_USER || !DATABASE_PASS || !DATABASE_HOST || !DATABASE_PORT || !DATABASE_NAME) {
      logger.error('missing environment variables for Key Vault');
      throw Error("missing environment variables for Key Vault");
    }

    // Get All Secrets from Key Vault
    let dbUser = await getSecret(DATABASE_USER, KEY_VAULT_NAME);
    let dbPassWord = await getSecret(DATABASE_PASS, KEY_VAULT_NAME);
    let dbHost = await getSecret(DATABASE_HOST, KEY_VAULT_NAME);
    let dbPort = await getSecret(DATABASE_PORT, KEY_VAULT_NAME);
    let dbName = await getSecret(DATABASE_NAME, KEY_VAULT_NAME);

    if (!dbUser || !dbPassWord || !dbHost || !dbPort || !dbName) {
      logger.error('missing DB settings');
      throw Error("missing DB settings")
    }

    dbConfig = {
      USER: dbUser, 
      PASSWORD: dbPassWord,  
      HOST: String(dbHost),  
      PORT : dbPort, 
      DB: String(dbName), 
      DIALECT: 'mssql',
      pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000
      }
    }   

    //
    const  sequelize = await new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
      host: dbConfig.HOST,
      dialect: 'mssql',
      port: dbConfig.PORT,
      storage: ':memory:',
      operatorsAliases: 0, // change this to zero
                  pool: {
                  max: dbConfig.pool.max,
                  min: dbConfig.pool.min,
                  acquire: dbConfig.pool.acquire,
                  idle: dbConfig.pool.idle
                  },
      define: {
                  timestamps: false,
                  freezeTableName: true
              },
  });

  sequelize.authenticate()
  .then(() => {
    logger.info('Database Connection has been established successfully.');
  })
  .catch(err => {
    logger.error('Unable to connect to the database:', err);
  });

  } 
  
 };
}

const Database= new DatabaseController()
module.exports = Database;
