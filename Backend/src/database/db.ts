const Sequelize =require('sequelize');

// import { Sequelize} from 'sequelize'

const DB_NAME = 'muestra_mysql';

const DB_USER = 'root';

const DB_PASS = null;

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,
    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }

);

database.sync({ force: true })
 .then(function () {
    console.log(`La BD fue creada correctamente!!!`);
  });

module.exports = {database}