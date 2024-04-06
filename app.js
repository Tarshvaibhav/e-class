// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');
//const morgan = require('morgan');

// Create an Express application
const app = express();

// Middleware to parse incoming request bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Middleware for logging HTTP requests
//app.use(morgan('dev'));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/tarsh', (req, res) => {
    res.send('Hello, Tarsh');
  });

  app.get('/tarsh1', (req, res) => {
    res.send('Hello, Tarsh');
  });

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
