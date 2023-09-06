
const express = require('express');
const cors = require('cors');

const mysql = require('mysql2');


const bodyParser = require('body-parser');
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
app.use(bodyParser.json());



// handle login request
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check if a user with the provided email and password exists in the 'users' table
  pool.query(
    'SELECT * FROM users WHERE email = ? AND password = ?',
    [email, password],
    (error, results, fields) => {
      if (error) {
        console.error(error);
        res.status(500).send('Error selecting user from database');
      } else if (results.length === 0) {
        res.status(401).json({ success: false, message: 'Incorrect email or password' });
      } else {
        const user = results[0];
        console.log(user);
        res.status(200).json({ success: true, name: user.name });
      }
    }
  );
});


// Routes
app.post('/users', async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Insert the new user into the 'users' table
    const [result] = await pool.promise().query(
      'INSERT INTO users (name, email, password) VALUES (?, ?, ?)',
      [name, email, password]
    );

    const newUser = { id: result.insertId, name, email, password };

    console.log(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error inserting user into database');
  }
});

app.get('/users', async (req, res) => {
  try {
    // Select all users from the 'users' table
    const [results] = await pool.promise().query('SELECT * FROM users');

    console.log(results);
    res.status(200).json(results);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error selecting users from database');
  }
});

app.get('/', (req, res) => {
  res.send('12345');
});

// Create a new order
app.post('/orders', async (req, res) => {
  const { name, email, phone, address, payment_method, cartItems } = req.body;

  // Insert order data into orders table
  let orderId;
  try {
    const result = await pool.query(
      'INSERT INTO orders (name, email, phone, address, payment_method, order_date, status) VALUES (?, ?, ?, ?, ?, NOW(), ?)',
      [name, email, phone, address, payment_method, 'pending']
    );
    orderId = result.insertId;
  } catch (error) {
  
    console.error(error);
    res.status(500).json({ error: 'Failed to insert order data' });
    return;
  }

  // Insert cart items into cartitems table
  try {
    const values = cartItems.map(({ itemName, itemPrice, quantity }) => [
      orderId,
      itemName,
      itemPrice,
      quantity,
    ]);
    await pool.query(
      'INSERT INTO cartitems (order_id, item_name, item_price, quantity) VALUES ?',
      [values]
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert cart items' });
    return;
  }

  res.json({ message: 'Order successfully placed' });
});

// Retrieve list of orders
app.get('/orders', (req, res) => {
  pool.query('SELECT * FROM orders', (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: 'Failed to retrieve orders' });
    } else {
      console.log(results);
      res.status(200).json(results);
    }
  });
});


// Insert cart item into cartitems table
app.post('/cartitems', async (req, res) => {
  const { order_id, items } = req.body;

  try {
    const values = items.map(({ item_name, item_price, quantity }) => [
      order_id,
      item_name,
      item_price,
      quantity,
    ]);
    await pool.query(
      'INSERT INTO cartitems (order_id, item_name, item_price, quantity) VALUES ?',
      [values]
    );
    res.json({ message: 'Cart items inserted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to insert cart items' });
  }
});

// Retrieve cart items for a specific order
app.get('/cartitems/:orderId', async (req, res) => {
  const { orderId } = req.params;

  try {
    const result = await pool.query(
      'SELECT * FROM cartitems WHERE order_id = ?',
      [orderId]
    );
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to retrieve cart items' });
  }
});




// API Endpoint to Insert Cart Items
app.post('/cartitems', (req, res) => {
  const { order_id, items } = req.body;
  const sql = 'INSERT INTO cartitems (order_id, item_name, item_price, quantity) VALUES ?';
  const values = items.map((item) => [order_id, item.item_name, item.item_price, item.quantity]);

  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(sql, [values], (error, results) => {
      connection.release();
      if (error) throw error;
      res.status(201).send(`Cart items inserted for order ID: ${order_id}`);
    });
  });
});

// API Endpoint to Retrieve Cart Items for an Order
app.get('/cartitems/:order_id', (req, res) => {
  const order_id = req.params.order_id;
  const sql = 'SELECT * FROM cartitems WHERE order_id = ?';

  pool.getConnection((err, connection) => {
    if (err) throw err;
    connection.query(sql, [order_id], (error, results) => {
      connection.release();
      if (error) throw error;
      res.status(200).json(results);
    });
  });
});




// Start server
const PORT = process.env.PORT || 3002;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



  app.listen(3001, () => {
  console.log('Server running on port 3001');
  });
  