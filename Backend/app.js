



// last one 

const express = require('express');
const cors = require('cors');
const { v4: uuidv4 } = require('uuid');
const mysql = require('mysql2');

const app = express();
const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'Rudrakharel',
  database: 'subashdb',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});
app.use(express.static('public'));
app.use(cors());
app.use(express.json());

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  const newUser = { id: uuidv4(), name, email, password };
  
  // Insert the new user into the 'users' table
  pool.query(
    'INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)',
    [newUser.id, newUser.name, newUser.email, newUser.password],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error inserting user into database');
      } else {
        console.log(results);
        res.status(201).json(newUser);
      }
    }
  );
});

app.get('/users', (req, res) => {
  // Select all users from the 'users' table
  pool.query(
    'SELECT * FROM users',
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error selecting users from database');
      } else {
        console.log(results);
        res.status(200).json(results);
      }
    }
  );
});
app.get('/', (req, res) => {
  res.send('12345');
});


app.listen(3001, () => {
  console.log('Server running on port 3001');
});

