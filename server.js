const path = require('path');
const express = require('express');
const app = express();

app.use(express.static(path.join(__dirname, '/')));
// Serve da file
app.use('/', (req, res) => {
  res.sendFile(__dirname + '/love.html');
});

// Config for Heroku Buildpack
const port = process.env.PORT || 8080;

// Service!
app.listen(port, () => {
  console.log('listening on *:8080');
});