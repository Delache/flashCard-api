import mysql from 'mysql';

export default async () => {

    const connexion = mysql.createConnection( {
        host     : 'localhost',
        user     : 'me',
        password : 'secret',
        database : 'my_db',
      });

    return connexion;
  };
// a modifier avec les bons paramètres
