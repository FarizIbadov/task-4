const express = require('express');
const router = express.Router();

const users = [];

router.get('/',(req,res,next) => {
    res.render('user',{docTitle: 'Add user'});
});

router.post('/',(req,res,next) => {
    users.push({name:req.body.user});
    res.redirect('/');
});

exports.router = router;
exports.users = users;