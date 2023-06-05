const mysql = require("mysql");
const config = require("./config"); //Create this file to store the MySQL connection configuration

const pool = mysql.createPool(config);
module.exports = pool;
