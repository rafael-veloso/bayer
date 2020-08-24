'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const farmRoute = require('./controllers/farmer.controller');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 8080;

app.use('/farmers', farmRoute);

// when a random route is inputed
app.get('*', (req, res) => {
   res.status(200).send({ message: 'Welcome to the Technical Challenge services.' })
});

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});