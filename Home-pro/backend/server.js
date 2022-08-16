/**
 * @author Scott Normore
 * @description The driver file/routing file for the back end application
 * for this project. To run the backend, use "node server.js", or use npm start to
 * run the complete application.
*/

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const cookieParser = require("cookie-parser")

require('dotenv').config();

const generalRoutes = require('./routes/general-routes');
const customerRoutes = require('./routes/customer-routes');
const adminRoutes = require('./routes/admin-routes');
const techRoutes = require('./routes/tech-routes');

const testRoutes = require('./routes/test-routes');

const HttpError = require('./models/http-error');

const app = express();

app.use(bodyParser.json());

//used to set the header of outgoing requests
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Origin', process.env.FRONT_END_DOMAIN || 'http://localhost:3000');
  res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization, include');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
  next();
});

//backend routing is segregated into these five different routes

app.use('/api/general', generalRoutes);
app.use('/api/customer', customerRoutes);
app.use('/api/admin', adminRoutes);
app.use('/api/tech', techRoutes);
app.use('/api/test',testRoutes);

/*
* remove the lined code and use the commented resource after the lined code 
* if deployment requires that the backend and front end use the same server
* (combined application)
*/
//------------------------START-----------------------------------------

//if no route was found, throw an error
app.use((req, res, next) => {
  const error = new HttpError('Could not find this route.', 404);
  throw error;
});
//error handling, sends error messages back

app.use((error, req, res, next) => {
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || 'An unknown error occurred!' });
});

//------------------------END-------------------------------------------

//more on combining the applications here: https://school.geekwall.in/p/HkAjoRxXf

//some useful for develpoment code

//used to look at the endpoints of the application
//const listEndpoints = require("express-list-endpoints"); // npm i express-list-endpoints
//console.log(listEndpoints(app));


//connects to database using mongo atlas api key. Is compatable with any mongodb database
mongoose
  .connect('mongodb+srv://Scott:tiger@cluster0.oeenx.mongodb.net/HomePro?retryWrites=true&w=majority')
  .then(() => {
    app.listen(process.env.PORT || 5000);
  })
  .catch(err => {
    console.log(err);
  });

