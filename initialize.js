// import .env file
require('dotenv').config();

// import mysql2
const mysql = require('mysql2');

// connect to mysql database. use the .env file to protect my password and user data.
const db = mysql.createConnection (
    {
        host: 'localhost',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME
    }
).promise();

module.exports = db;