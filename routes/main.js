const express = require('express');
const router = express.Router();

const userRout = require('./user'); 

router.get('/',(req,res,next) => {
    res.render('main',{docTitle:"Main Page",users:userRout.users})
});

module.exports = router;