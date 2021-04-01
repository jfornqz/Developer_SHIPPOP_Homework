var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//connect to database
var mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/shippop")
mongoose.Promise = global.Promise


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//กำหนด Path
var userApi = require('./routes/api/userApi');
var productApi = require('./routes/api/productApi');
var cartApi = require('./routes/api/cartApi');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', userApi);

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