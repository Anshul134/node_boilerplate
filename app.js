const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');

//To read env. vars from .env file
require('dotenv').config();

const PORT = process.env.PORT;

app.set('view engine', 'handlebars');
app.engine( 'handlebars', exphbs({
    extname: 'handlebars',
    defaultView: 'default',
    layoutsDir: __dirname + '/views/layouts/',
    partialsDir: __dirname + '/views/partials/',
  }));

//File containing string literals for app
const APP_DATA = require('./src/appDataObj');

//routes for app home
const appRoute = require('./src/routes/routes');

app.use(APP_DATA.APP.HOME, appRoute);

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}`);
})