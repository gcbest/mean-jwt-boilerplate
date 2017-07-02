const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const env = require('dotenv').load();

// Routes
const api = require('./server/routes/api');
const signup = require('./server/routes/signup');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// For passport authentication
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

// Point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

// Routes Middleware
app.use('/api', api);
app.use('/signup', signup);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

// Models
var models = require("./app/models");

// Load passport strategies
require('./config/passport/passport')(passport, models.user);

// Sync Database
models.sequelize.sync().then(() => {
  console.log('Nice! Database looks fine')
}).catch((err) => {
  console.log(err, "Something went wrong with the Database Update!")
});


const port = process.env.PORT || '3005';

const server = http.createServer(app);


server.listen(port, () => console.log(`App listening on port ${port}`));
