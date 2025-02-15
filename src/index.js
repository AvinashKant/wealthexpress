const express = require('express');
const app = require('./app.js');
const {connectDB} = require('../config/database.js');

connectDB();

const port = process.env.PORT || 8000;

app.get('/', (req, res) => {
    res.send('Hello, world!');
  });

app.listen(port, () =>
  console.log(`Server is working on ${port}`)
    
);