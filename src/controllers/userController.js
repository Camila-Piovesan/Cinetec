import express from "express";
import db from '../services/userService.js';

const routes = express.Router();

routes.post('/', async (request, response) => {
  const {name, email, password} = request.body;
  console.log("teste controller")
  await db.createUser(name, email, password);

  response.status(200).send({message: 'Salvo com sucesso'});
  
});

export default routes;