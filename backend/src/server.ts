import * as bodyParser from 'body-parser';
import cors from 'cors';
import { Server } from '@overnightjs/core';
import { Logger } from '@overnightjs/logger';
import { controllers } from './controllers';

class AppServer extends Server {

   constructor() {
      super(true);
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded({extended: true}));
      this.app.use(cors());
      super.addControllers(controllers);
   }

   public start(port: number): void {
      this.app.get('*', (req, res) => {
            res.status(200).send('Welcome to the Technical Challenge services.');
      });
      this.app.listen(port, () => {
            Logger.Imp(`Server is running on PORT ${port}`);
      });
   }

}

export default AppServer;
