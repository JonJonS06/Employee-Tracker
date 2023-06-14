const mysql = require('mysql2');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        port: '3306',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: 'employee_id'
    },

    console.log('Connected to employee_db ✅')
);

module.exports = db;