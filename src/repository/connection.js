import mysql2 from 'mysql2/promise';

async function connect() {
  const connection = await mysql2.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'filmes'
  });

  return connection;
}

export default {connect};