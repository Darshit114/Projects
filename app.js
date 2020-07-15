const express = require('express');
const app = express();
let routes = require('./api-router');
const bosyparser = require('body-parser');
const mongoose = require('mongoose');

const port = process.env.port || 8080;

app.use(bosyparser.json());

mongoose.connect('mongodb://localhost/restAPI', { useNewUrlParser: true});

var db = mongoose.connection;

if(!db)
    console.log("Error! connecting db.");
else
   console.log("Db connected successfully!!");

app.use('/', routes);

app.listen(port, ()=>{
    console.log("App working successfully on port "+port);
});