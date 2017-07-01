const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const env = require('dotenv').load();

//Models
var models = require("./app/models");


// Get api routes
const api = require('./server/routes/api');

const app = express();

// Parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// For passport authentication
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialized: true})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

//Sync Database
models.sequelize.sync().then(function() {

  console.log('Nice! Database looks fine')

}).catch(function(err) {

  console.log(err, "Something went wrong with the Database Update!")

});

// point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3005';

const server = http.createServer(app);


server.listen(port, () => console.log(`App listening on port ${port}`));
