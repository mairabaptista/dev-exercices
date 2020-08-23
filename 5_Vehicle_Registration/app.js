const express = require('express');

const app = express();

//morgan for logging purposes
const morgan = require('morgan');

//helper for parsing requests
const bodyParser = require('body-parser');

//import mongoose
const mongoose = require('mongoose');

const veiculosRoutes = require('./api/routes/veiculos');

//connect to mongoose
mongoose.connect('mongodb+srv://dbUser:<password>@cluster0.hotji.mongodb.net/veiculosdb?retryWrites=true&w=majority', {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
//const { urlencoded } = require('body-parser');

//logging requests
app.use(morgan('dev'));

//calling the parser
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//handling CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', '*');
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET');
        return res.status(200).json({});
    }
    next();
});

//an incoming request has to come through here
app.use('/veiculos', veiculosRoutes); 

//handling errors
app.use((req, res, next) => {
    const error = new Error('Not found');
    error.status = 404;
    next(error);
})

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

module.exports = app;