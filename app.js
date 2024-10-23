const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const db = require("./config/mongo-config");

const path = require('path');
app.set('view engine','ejs');
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));



app.listen(3000);