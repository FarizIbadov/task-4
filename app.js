const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const mainPage = require('./routes/main');
const userPage = require('./routes/user');

app.use(bodyParser.urlencoded({extended:false}));

app.set('view engine','ejs');

app.use('/user',userPage.router);
app.use('/',mainPage);

app.use((req,res,next) => {
    res.status(404).render('404',{docTitle:'404 NOT FOUND'});
});

app.listen(3000);