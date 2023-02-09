import React from "react";
import {Link} from 'react-router-dom';
import style from './style.css';
import pipocaMenu from '../../elementos/pipocaMenu.svg'

function Index(){
  return (
    <><img id='pipocaMenu' src={pipocaMenu} alt="Imagem de elementos de cinema" />

      <button id='login'>LOGIN</button>

      <button id='cadastro'>CADASTRE-SE</button>

      </>

  )
}

export default Index