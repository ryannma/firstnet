const express = require('express');
const app = express();
require('dotenv').config();
require('module-alias/register');

// Pretty print stuff
require('colors');
app.set('json spaces', 2);

// Allow CORS
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Middleware + Setup
// -------------------------------------------------
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


// Routing Setup
// -------------------------------------------------
app.use(require('@routes/routeCombiner'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Resource Not Found');
  err.status = 404;
  next(err);
});


// Error Handling
// -------------------------------------------------
const errorHandler = require('errorhandler');
app.use(errorHandler());

// Return 500's and error messages
app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    errData: err 
  });
});

module.exports = app;
