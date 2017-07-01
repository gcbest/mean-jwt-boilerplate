const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// get api routes
const api = require('./server/routes/api');

const app = express();

// parsers for POST data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// point static path to dist
app.use(express.static(path.join(__dirname, 'dist')));

app.use('/api', api);

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});

const port = process.env.PORT || '3005';

const server = http.createServer(app);


server.listen(port, () => console.log(`App listening on port ${port}`));
