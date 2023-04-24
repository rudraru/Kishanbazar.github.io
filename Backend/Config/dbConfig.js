const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const pool = mysql.createPool({
  host: 'localhost',
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  authPlugins: {
    mysql_clear_password: () => () => Buffer.from(process.env.PASSWORD + '\0')
  }
});

module.exports = pool;
