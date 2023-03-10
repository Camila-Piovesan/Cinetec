import express from "express";
import db from '../services/userService.js';

const routes = express.Router();

routes.post('/', async (request, response) => {
  const {name, email, password, typeUser} = request.body;

  await db.createUser(nome, eamil, password, typeUser);

  response.status(200).send({message: 'Salvo com sucesso'});
});

export default routes;