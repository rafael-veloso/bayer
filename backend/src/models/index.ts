import fs from 'fs';
import path from 'path';
import { Sequelize } from 'sequelize';

const basename: string = path.basename(__filename);
const env: string = process.env.NODE_ENV || 'development';
const config: any = require(__dirname + '/../../sequelize-config/config/config.json')[env];

const db: {[key: string]: any} = {};

let sequelize: any = null;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable] as any, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.ts');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file)).default(sequelize);
    db[model.name] = model;
  });

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;