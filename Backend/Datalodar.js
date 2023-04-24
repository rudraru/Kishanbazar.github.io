const mysql = require('mysql2');
const fs = require('fs');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'subashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

function loadData() {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;

    const jsonData = JSON.parse(data);
    const users = jsonData.users.map((user) => [
      user.id,
      user.name,
      user.email,
      user.password
    ]);

    pool.query(
      'INSERT INTO users (id, name, email, password) VALUES ?',
      [users],
      (error, results, fields) => {
        if (error) throw error;
        console.log('Data loaded successfully!');
      }
    );
  });
}

loadData();
