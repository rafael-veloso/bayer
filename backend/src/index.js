'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const port = process.env.PORT || 8080;

app.get('/farmers', (req, res) => {
   if (req.query.nameOrDocument === 'Rafael') {
      res.status(200).send([
         {
            id: 1,
            name: 'Rafael Veloso',
            document: {
               documentNumber: '123456',
               documentType: 'cpf'
            },
            address: {
               street: '301',
               state: 'DF',
               address: 'AOS 4 Bl D',
               country: 'Brazil'
            }
         },
         {
            id: 2,
            name: 'Marcela Gama',
            document: {
               documentNumber: '789456',
               documentType: 'cpf'
            },
            address: {
               street: '301',
               state: 'DF',
               address: 'AOS 4 Bl D',
               country: 'Brazil'
            }
         }
      ]);
   } else {
      res.status(200).send([]);
   }
});

// when a random route is inputed
app.get('*', (req, res) => {
   res.status(200).send({ message: 'Welcome to Bayer API.' })
});

app.listen(port, () => {
   console.log(`Server is running on PORT ${port}`);
});