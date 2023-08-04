require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 8000;
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const cookieParser = require('cookie-parser');
// const mongoose = require('mongoose');

const connectToDB  = require('./config/mongoose');
app.use(expressLayouts);
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(bodyParser.urlencoded({extended:false}));
app.set('view engine','ejs');
app.set('views','./views');
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);




app.use('/',require('./routes/index'));


app.listen(PORT,(err)=>{
    if(err){
        return console.log("Error in running express");
    }
    console.log("Yup, Express Server is running on port ",PORT);
})