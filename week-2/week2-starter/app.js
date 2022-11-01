'use strict';
const express = require('express');
const app = express();
const port = 3000;
const catRouter = require('./routes/catRoute');

app.use('/cat', catRouter);

app.get('/users', (req, res) => {
  res.send('From here you can view users.')
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));

