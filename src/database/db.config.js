const  dbConfiguration = {  
    HOST: String(process.env.DATABASE_HOST),
    USER: process.env.DATABASE_USER,
    PASSWORD: process.env.DATABASE_PASS,
    DB: process.env.DATABASE_NAME,
    PORT: process.env.DATABASE_PORT,
    DIALECT: 'mssql',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };


  module.exports = dbConfiguration;

