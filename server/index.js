const express = require('express');
const morgan = require('morgan');
const path = require('path');
// const bodyParser = require('body-parser');
const app = express();

// logging middleware
app.use(morgan('dev'));

//body parsing middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//static middleware
// you'll of course want static middleware so your browser can request things like your 'bundle.js'

app.use(express.static(path.join(__dirname, '../public')));

//routes mounted on /api
app.use('/api', require('./api'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

// const port = process.env.PORT || 3000;
// app.listen(port, function () {
//   console.log('Knock, knock');
//   console.log("Who's there?");
//   console.log(`You're server, listening on port ${port}`);
// });

module.exports = app;
