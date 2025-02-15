const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');
const app = express();

// enable cors
app.use(cors());

// parse json request body
app.use(express.json());

// parse urlencoded request body
app.use(express.urlencoded({ extended: true }));

// sanitize request data
app.use(xss());
app.use(mongoSanitize());

// v1 api routes
app.use("/v1", routes);

module.exports = app;