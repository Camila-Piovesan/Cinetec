import mysql2 from 'mysql2/promise';

async function connect() {
  const connection = await mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    password: '',
    database: 'cinetec'
  });

  return connection;
}

export default {connect};
