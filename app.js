var express = require('express');

var app = express();
var yearRouter = require('../whatyearisit-backend/route/year');


const cors = require('cors');
app.use(cors());

app.use('/', yearRouter);

module.exports = app;