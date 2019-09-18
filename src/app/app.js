var express = require('express');
const app = express();
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
require('./models/db');
require('./config/passport');

//Initialize passport as Express middleware
app.use(passport.initialize());
app.use('/api', routesApi);

//Error handler, catch unauthorized errors
app.use(function(err,req,res,next){
    if(err.name==='UnauthorizedError'){
        res.status(401);
        res.json({"message":err.name+": "+err.message});
    }
});

