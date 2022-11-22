'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const catRouter = require('./routes/catRoute');
const userRouter = require('./routes/userRoute');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/cat', catRouter);
app.use('/user', userRouter);

app.listen(port, () => console.log(`Application listening on port ${port}!`));

