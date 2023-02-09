import React from "react";
//import Header from "../../components/Header/Index";
import {Link} from 'react-router-dom';
import style from './style.css';
import camera from '../../elementos/camera.svg'
import filmeEsquerdo from '../../elementos/filmeEsquerdo.svg'
import filmeDireito from '../../elementos/filmeDireito.svg'

function Index(){
  return (
    <>
     <container id='container'>
      <label id='title'>Login</label>
      <label class='label'>Email</label>
      <input type="text" name="email" placeholder="  Digite seu email" />
      <label class='label'>Senha</label>
      <input type="text" name="senha" placeholder="  Digite sua senha" />
      <button>ENTRAR</button>
    </container>

    <img id='camera' src={camera}></img>

      <img id='filmeDireito' src={filmeDireito}></img>
      <img id='filmeEsquerdo' src={filmeEsquerdo}></img>
    </>
  )
}

export default Index