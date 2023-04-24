// const express = require('express');
// const cors = require('cors');
// const { v4: uuidv4 } = require('uuid');
// const mysql = require('mysql2');

// const app = express();
// const port = 3001;
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'Rudrakharel',
//   database: 'subashdb',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });

// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));



// app.post('/users', (req, res) => {
//   const { name, email, password } = req.body;
//   const newUser = { id: uuidv4(), name, email, password };
  
//   // Insert the new user into the 'users' table
//   pool.query(
//     'INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)',
//     [newUser.id, newUser.name, newUser.email, newUser.password],
//     (error, results, fields) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send('Error inserting user into database');
//       } else {
//         console.log(results);
//         res.status(201).json(newUser);
//       }
//     }
//   );
// });

// app.get('/users', (req, res) => {
//   // Select all users from the 'users' table
//   pool.query(
//     'SELECT * FROM users',
//     (error, results, fields) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send('Error selecting users from database');
//       } else {
//         console.log(results);
//         res.status(200).json(results);
//       }
//     }
//   );
// });

// app.use((req, res, next) => {
//   res.status(404).send('404 - Page Not Found');
// });

// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send('500 - Internal Server Error');
// });

// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });








const mysql = require('mysql2/promise');
const express = require('express');
const bodyParser = require('body-parser');

// Create the MySQL pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database'
});

// Create the Express app
const app = express();

// Configure middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Define the route for inserting a new user
app.post('/users', async (req, res) => {
  try {
    const { id, name, email, password } = req.body;

    // Validate user input
    if (!id || !name || !email || !password) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    
    // Create a new connection from the pool
    const connection = await pool.getConnection();

    // Begin the transaction
    await connection.beginTransaction();

    try {
      // Convert the ID to a binary UUID
      const hexId = Buffer.from(id.replace(/-/g, ''), 'hex');

      // Insert the user into the database
      await connection.query(
        'INSERT INTO users (id, name, email, password) VALUES (?, ?, ?, ?)',
        [hexId, name, email, password]
      );

      // Commit the transaction
      await connection.commit();

      // Return a success response
      return res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
      // Roll back the transaction if an error occurs
      await connection.rollback();

      // Log the error to the console
      console.error(error);

      // Return an error response
      return res.status(500).json({ message: 'Internal server error' });
    } finally {
      // Release the connection back to the pool
      connection.release();
    }
  } catch (error) {
    // Log the error to the console
    console.error(error);

    // Return an error response
    return res.status(500).json({ message: 'Internal server error' });
  }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

