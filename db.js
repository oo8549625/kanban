const mysql = require('mysql2');
// create the connection to database
const dotenv = require("dotenv");
dotenv.config();
var pool;

module.exports = {
    getPromisePool() {
        if (pool) return pool.promise();
        pool = mysql.createPool({
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE,
            waitForConnections: true,
            connectionLimit: 10,
            queueLimit: 0
        });
        return pool.promise();
    }
};