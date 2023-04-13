import jwt from 'jsonwebtoken';

function generatePassword(){

  const key = (Math.random() + 1).toString(36).substring(0,10);
  const newPassword = key.replace('a','@').replace('x','*').replace('i', '#').replace('t','$').
  replace('a', '!').replace('r', '%');

  return newPassword;

}

export {generatePassword};