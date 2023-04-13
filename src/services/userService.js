import database from '../repository/connection.js';

async function createUser(name, email, password) {
  const sql = 'INSERT INTO tbl_usuarios(nome_usuario, email, senha) VALUES(?, ?, ?)';
  const dados = [name, email, password];
  console.log("teste service")

  const conn = await database.connect();
  console.log("teste service 2")

  conn.query(sql, dados);
  conn.end();
}

async function updateUser(name, email, password, idUser){
  const sql = 'UPDATE tbl_usuario SET nome = ?, email = ?, senha = ? WHERE id_usuario = ?';
  const dados = [name, email, password, idUser];

  const conn = await database.connect();
  conn.query(sql, dados);
  conn.end();
}

export default {createUser, updateUser};