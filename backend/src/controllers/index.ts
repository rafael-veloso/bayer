import fs from 'fs';
import path from 'path';

const basename: string = path.basename(__filename);
export const controllers: any[] = [];

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename); // && (file.slice(-3) === '.ts');
  })
  .forEach(file => {
    const result = require(path.join(__dirname, file));
    Object.keys(result).forEach((key: string) => {
      const Controller = result[key];
      controllers.push(new Controller());
    });
  });
  