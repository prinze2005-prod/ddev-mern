const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const generalRoutes = require('./routes/general-routes');
const customerRoutes = require('./routes/customer-routes');
const adminRoutes = require('./routes/admin-routes');

const HttpError = require('./models/http-error');

const app = express();
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');
  next();
});

app.use('/api/general', generalRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/admin', adminRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

const listEndpoints = require("express-list-endpoints"); // npm i express-list-endpoints
console.log(listEndpoints(app));

mongoose
  .connect('mongodb+srv://Scott:tiger@cluster0.oeenx.mongodb.net/HomePro?retryWrites=true&w=majority')
  .then(() => {
    app.listen(5000);
  })
  .catch(err => {
    console.log(err);
  });

