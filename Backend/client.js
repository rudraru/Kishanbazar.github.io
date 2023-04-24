// const express = require('express');
// const cors = require('cors');
// const { v4: uuidv4 } = require('uuid');
// const fs = require('fs');

// const app = express();

// app.use(cors());
// app.use(express.json());

// const USERS_FILE_PATH = './users.json';

// // Create the users file if it doesn't exist
// if (!fs.existsSync(USERS_FILE_PATH)) {
//   fs.writeFileSync(USERS_FILE_PATH, '[]');
// }

// app.post('/users', (req, res) => {
//   const { name, email, password } = req.body;
//   const newUser = { id: uuidv4(), name, email, password };

//   // Read the current users from the file
//   const users = JSON.parse(fs.readFileSync(USERS_FILE_PATH, 'utf-8'));

//   // Add the new user to the users array
//   users.push(newUser);

//   // Write the updated users array back to the file
//   fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users));

//   res.status(201).json(newUser);
// });

// app.listen(3001, () => {
//   console.log('Server running on port 3001');
// });



import { v4 as uuidv4 } from 'uuid';
import express from 'express';
import cors from 'cors';
import fs from 'fs';

const app = express();
app.use(cors());
app.use(express.json());

const USERS_FILE_PATH = './users.json';

// Create the users file if it doesn't exist
if (!fs.existsSync(USERS_FILE_PATH)) {
  fs.writeFileSync(USERS_FILE_PATH, '[]');
}

app.post('/users', (req, res) => {
  const { name, email, password } = req.body;
  const id = uuidv4();
  const newUser = { id, name, email, password };

  // Read the current users from the file
  const users = JSON.parse(fs.readFileSync(USERS_FILE_PATH, 'utf-8'));

  // Add the new user to the users array
  users.push(newUser);

  // Write the updated users array back to the file
  fs.writeFileSync(USERS_FILE_PATH, JSON.stringify(users));

  res.status(201).json(newUser);
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
