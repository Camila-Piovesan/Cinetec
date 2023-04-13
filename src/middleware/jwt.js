import jwt from "jsonwebtoken";

function verifyToken(request, response, next) {
  const myKey = 'EssaÉaChave!@#';

  const authHeader = request.headers.authorization;

  if(!authHeader) {
    return response.status(401).send({message: "Token não enviado"})
  }

  const parts = authHeader.split(' ');

  if(parts.length !== 2){
    return response.status(401).send({message: "Token no formato inválido"});
  }

  const {format, token} = parts;
  if(format !== 'Bearer') {
    return response.status(401).send({message: "Token não contém 'Bearer'"});
  }

  jwt.verify(token, myKey, (err, decoded) => {
    if(err) {
      return response.status(401).send({message: "Sessão encerrada, usuário não está logado"});
    }
  return next();
});

}

export default verifyToken; 