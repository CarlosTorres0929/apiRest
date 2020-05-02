const express = require('express');
const bodyParser = require('body-parser');

const App = express();

const Product = require('./routes/citas');

App.use(bodyParser.json());
App.use(bodyParser.urlencoded({extended: false}));

App.use('/citas',Product);

module.exports = App;