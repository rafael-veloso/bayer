import express from 'express';
import FarmerService from '../services/farmer.service';

const router = express.Router();

class FarmerController {

  static async find(req: express.Request, res: express.Response) {
    try {
      const result = await FarmerService.find(req.query.nameOrDocument)
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({message: error.message});
    }
  }

}

router.get('/', FarmerController.find);

export default router;
