'use strict';

const express = require('express');
const FarmerService = require('../services/farmer.service');

const router = express.Router();

class FarmerController {

  static async find(req, res) {
    try {
      const result = await FarmerService.find(req.query.nameOrDocument)
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({message: error.message});
    }
  }

}

router.get('/', FarmerController.find);

module.exports = router;