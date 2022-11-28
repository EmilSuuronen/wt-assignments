'use strict';
const express = require('express');
const app = express();
const cors = require('cors');
const port = 3000;
const catRouter = require('./routes/catRoute');
const userRouter = require('./routes/userRoute');
const authRouter = require('./routes/authRoute');
const passport = require('./utils/passport');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use('/cat', passport.authenticate('jwt', {session: false}), catRouter);
app.use('/user', passport.authenticate('jwt', {session: false}), userRouter);
app.use('/auth', userRouter);

app.listen(port, () => console.log(`Application listening on port ${port}!`));

