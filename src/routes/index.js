const express = require('express');
const home = require('../controllers/home');
const router = express.Router();
module.exports = app =>{
    router.get('/',home.index);
    app.use(router); 
    
}