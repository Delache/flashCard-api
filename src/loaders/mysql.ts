import mysql from 'mysql';
import { DbHandler } from '../repository/db.handler';

export default async () => {


  const connexion = mysql.createConnection({
    host: process.env.WILD_API_DB_HOST,
    port: 1234,
    user: process.env.WILD_API_DB_USER,
    password: process.env.WILD_API_FUMAINERIE_DB_PASSWORD,
    database: process.env.WILD_API_DB_DATABASE,
  });

  DbHandler.getInstance(connexion);

  connexion.connect(function(err) {
    if (err) { throw err; }
    console.log('Connected!');
  });

  return connexion;
};
