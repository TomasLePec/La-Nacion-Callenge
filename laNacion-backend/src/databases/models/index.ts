import { Sequelize } from 'sequelize';
import { dbConfig } from '../dbConfig';

export const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST || 'localhost',
  dialect: 'mysql',
});
