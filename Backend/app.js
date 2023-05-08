

// const express = require('express');
// const cors = require('cors');
// const { v4: uuidv4 } = require('uuid');
// const mysql = require('mysql2');
// const nodemailer = require('nodemailer');
// const app = express();
// const pool = mysql.createPool({
//   host: 'localhost',
//   user: 'root',
//   password: 'Rudrakharel',
//   database: 'subashdb',
//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0
// });
// app.use(express.static('public'));
// app.use(cors());
// app.use(express.json());

// // handle login request
// app.post('/login', (req, res) => {
//   const { email, password } = req.body;

//   // Check if a user with the provided email and password exists in the 'users' table
//   pool.query(
//     'SELECT * FROM users WHERE email = ? AND password = ?',
//     [email, password],
//     (error, results, fields) => {
//       if (error) {
//         console.error(error);
//         res.status(500).send('Error selecting user from database');
//       } else if (results.length === 0) {
//         res.status(401).json({ success: false, message: 'Incorrect email or password' });
//       } else {
//         const user = results[0];
//         console.log(user);
//         res.status(200).json({ success: true, name: user.name });
//       }
//     }
//   );
// });

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

// app.get('/', (req, res) => {
//   res.send('12345');
// });


// app.post('/orders', (req, res) => {
//   const order = {
//     orderID: 'ORD001',
//     customerName: 'John Doe',
//     orderDate: '2023-05-01 12:00:00',
//     products: 'Product 1, Product 2',
//     unit: '1, 2',
//     rate: '10, 20',
//     totalPrice: '30'
//   };

//   pool.query('INSERT INTO `order` SET ?', order, (error, results) => {
//     if (error) {
//       console.error(error);
//       res.status(500).send('Error inserting order into database');
//     } else {
//       console.log('Order inserted into the database with ID:', results.insertId);
//       const transporter = nodemailer.createTransport({
//         service: 'gmail',
//         auth: {
//           user: 'Ecoaap@gmail.com',
//           pass: 'your_password_here'
//         }
//       });

//       const customerMailOptions = {
//         from: 'Ecoaap@gmail.com',
//         to: email,
//         subject: 'Order placed successfully',
//         text: `Dear ${name}, your order (${product}) has been placed successfully. Thank you for shopping with us!`
//       };

//       const ownerMailOptions = {
//         from: 'Ecoaap@gmail.com',
//         to: 'info@kishan.com',
//         subject: 'New order received',
//         text: `Dear owner, a new order (${product}) has been placed by ${name}. Please check your dashboard for more details.`
//       };

//       transporter.sendMail(customerMailOptions, (error, info) => {
//         if (error) {
//           console.error(error);
//           res.status(500).send('Error sending email notification to customer');
//         } else {
//           console.log('Email sent to customer:', info.response);
//         }
//       });

//       transporter.sendMail(ownerMailOptions, (error, info) => {
//         if (error) {
//           console.error(error);
//           res.status(500).send('Error sending email notification to owner');
//         } else {
//           console.log('Email sent to owner:', info.response);
//           res.status(201).json({ success: true, message: 'Order inserted and email sent' });
//         }
//       });
//     }
//   });
// });

// app.listen(3001, () => {
//   console.log('Server running on port 3001');
// });



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






// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});



  app.listen(3001, () => {
  console.log('Server running on port 3001');
  });
  
    