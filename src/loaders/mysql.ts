import mysql from 'mysql';
import { DbHandler } from '../repository/db.handler';


export default async () => {

  const connexion = mysql.createConnection({
    port: parseInt(process.env.WILD_DB_PORT || '3306', 10),
    host: process.env.WILD_DB_HOST,
    user: process.env.WILD_DB_USER,
    password: process.env.WILD_DB_PASSWORD,
    database: 'wild',
  });

  DbHandler.getInstance(connexion);

  return connexion;
};
// a modifier avec les bons paramètres
