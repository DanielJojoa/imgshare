const path = require('path');
const morgan = require('morgan');
const express = require('express');
const errorHandler = require('errorhandler');
const hbs = require('express-handlebars');
const multer = require('multer');

const routes = require('../routes');

module.exports = app =>{
    //settings
    app.set('port',process.env.PORT || 3500);
    app.set('views', path.join(__dirname,'../views'));
    app.engine('.hbs',hbs({
        defaultLayout: 'main',
        layoutsDir: path.join(path.join(app.get('views'), 'layouts')),
        partialsDir: path.join(app.get('views'),'partials'),
        helpers: require('./helpers'),
        extname:'.hbs'

    }));
    app.set('view engine', '.hbs');
    app.use(multer({ dest: path.join(__dirname, '../public/upload/temp') }).single('image'));

    //middlewares
    app.use(morgan('dev'));
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
    
    // routing
    routes(app);
    // static files
    app.use('/public', express.static(path.join(__dirname, '../public')));
    // error handlers
    if ('development' === app.get('env')) {
        app.use(errorHandler());
    }


    return app;

}
