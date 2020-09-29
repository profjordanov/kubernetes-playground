'use strict';

var express = require('express'),
    app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.get('/', function(req, res) {
    res.render('home.pug');
});

if (process.env.ENEMIES) {
    console.log(process.env.ENEMIES);
}

app.listen(8080);
console.log('Code It Up app up and running!');
module.exports.getApp = app;