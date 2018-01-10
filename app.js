var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var cors = require('cors');
var index = require('./routes/index');
var users = require('./routes/users');
var category = require('./routes/cat_tbl_router');
var bill = require('./routes/bill_tbl_router');
var cart = require('./routes/cart_tbl_router');
var feedback = require('./routes/feedback_tbl_router');
var order = require('./routes/order_tbl_router');
var product = require('./routes/product_tbl_router');
var user = require('./routes/user_tbl_router');
var login = require('./routes/login_router');
var prodCat = require('./routes/pro_cat_route');
var email=require('./routes/email_router');
var delalluser=require('./routes/del_all_user');
var delallpro=require('./routes/del_all_pro');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/category', category);
app.use('/bill', bill);
app.use('/cart', cart);
app.use('/feedback', feedback);
app.use('/order', order);
app.use('/product', product);
app.use('/user', user);
app.use('/login', login);
app.use('/prod_cat', prodCat);
app.use('/email',email);
app.use('/delalluser',delalluser);
app.use('/delallpro',delallpro);



// catch 404 and forward to error handler
app.use(function (req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
