'use strict';
const express = require('express');
const app = express();
const port = 3000;

app.get('/cat', (req, res) => {
  res.send('From this endpoint you can get cats.')
});

app.get('/cat/:catId', (req, res) => {
  res.send('From this endpoint you can get cats with id of ' + req.params.catId)
});

app.post('/cat', (req, res) => {
  console.log(req)
  res.send('From this endpoint you can add cats.')
});

app.put('/cat', (req, res) => {
  console.log(req)
  res.send('From this endpoint you can edit cats.')
});

app.delete('/cat', (req, res) => {
  console.log(req)
  res.send('From this endpoint you can delete cats.')
});

app.get('/users', (req, res) => {
  res.send('From here you can view users.')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

