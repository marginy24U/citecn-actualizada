require('dotenv').config()

let dbOptions = {
  username: process.env.DB_USER || "mombacho_citecnBD",
 password: process.env.DB_PASSWORD || "Citecn2021*",
database: process.env.DB_NAME || "mombacho_citecnBD",
    host: process.env.DB_HOST || '50.87.192.144',
    port: process.env.DB_PORT || 3306,
    dialect: process.env.DB_DIALECT || "mysql",
    dialectOptions: {
       bigNumberStrings: true
     },
    logging: true
 };
//let dbOptions = {
    //username: process.env.DB_USER || "root",
   // password: process.env.DB_PASSWORD || "",
   // database: process.env.DB_NAME || "citecn",
   // host: process.env.DB_HOST || 'localhost',
   // port: process.env.DB_PORT || 3306,
   // dialect: process.env.DB_DIALECT || "mysql",
   // dialectOptions: {
        //bigNumberStrings: true
   // },
    //logging: true
//};


module.exports = dbOptions;