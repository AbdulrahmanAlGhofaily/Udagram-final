import { Sequelize } from 'sequelize-typescript';
import { config } from './config/config';

export const sequelize = new Sequelize({
  username: config.POSTGRES_USERNAME,
  password: config.POSTGRES_PASSWORD,
  database: config.POSTGRES_DB,
  host: config.POSTGRES_HOST,

  dialect: 'postgres',
  storage: ':memory:',
});
