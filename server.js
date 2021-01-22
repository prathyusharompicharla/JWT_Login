const express = require("express");
const bodyParser = require("body-parser");
const InitiateMongoServer = require("./config/db");
const Exceljs=require('exceljs')
const User=require('./Models/User')
const router = express.Router();

// Initiate Mongo Server
InitiateMongoServer();

const app = express();

// PORT
const PORT = process.env.PORT || 4000;

// Middleware
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.json({ message: "API Working" });
});


var authController = require('./authController');
app.use('/api/auth', authController);



app.listen(PORT, (req, res) => {
  console.log(`Server Started at PORT ${PORT}`);
});



module.exports = app;