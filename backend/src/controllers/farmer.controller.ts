import { Request, Response } from 'express';
import { Controller, Get } from '@overnightjs/core';
import { FarmerService } from '../services/farmer.service';

@Controller('farmers')
export class FarmerController {

  @Get('')
  async find(req: Request, res: Response): Promise<void> {
    try {
      const result = await FarmerService.find(req.query.nameOrDocument);
      res.status(200).send(result);
    } catch (error) {
      res.status(500).send({message: error.message});
    }
  }

}
