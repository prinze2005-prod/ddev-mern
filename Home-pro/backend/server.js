const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser")
/*
const multer = require("multer");
const fs = require("fs");
*/


require('dotenv').config();

const generalRoutes = require('./routes/general-routes');
const customerRoutes = require('./routes/customer-routes');
const adminRoutes = require('./routes/admin-routes');
const techRoutes = require('./routes/tech-routes');

const testRoutes = require('./routes/test-routes');

const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());
//app.use(cookieParser());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONT_END_DOMAIN || 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization, include');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});
/*
app.options('/', (req, res) => {
  res.sendStatus(200);
});
*/

app.use('/api/general', generalRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/tech', techRoutes);
app.use('/api/test',testRoutes);

app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});



//error handling
app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});


const listEndpoints = require("express-list-endpoints"); // npm i express-list-endpoints
//console.log(listEndpoints(app));
console.log(process.env.DOMAIN_URL);
console.log("eyy");

mongoose
  .connect('mongodb+srv://Scott:tiger@cluster0.oeenx.mongodb.net/HomePro?retryWrites=true&w=majority')
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch(err => {
    console.log(err);
  });

