const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

//connect to database
const mongoose = require('mongoose');
try {
    mongoose.connect("mongodb://localhost/shippop")
    mongoose.Promise = global.Promise
    console.log("Connect success.")
} catch (err) {
    console.log("Can't connect to database")
}

//connect to database
// const connectDB = require('./config/db')
// connectDB();



//define variable of api path
const indexRouter = require('./routes/index');

const userApi = require('./routes/api/userApi');
const productApi = require('./routes/api/productApi');
const cartApi = require('./routes/api/cartApi');

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// create api routes
app.use('/', indexRouter);
app.use('/api/users', userApi);
app.use('/api/products', productApi);
app.use('/api/carts', cartApi);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;