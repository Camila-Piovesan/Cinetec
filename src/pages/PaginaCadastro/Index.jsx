import React from "react";
import Header from "../../components/Header/Index";
import {Link} from 'react-router-dom';
import style from './style.css';
import camera from '../../elementos/camera.svg'
import filmeEsquerdo from '../../elementos/filmeEsquerdo.svg'
import filmeDireito from '../../elementos/filmeDireito.svg'

function Index(){
  return (
    <>
     <container id='container2'>
      <label id='title1'>Cadastre-se</label>
      <label class='label1'>Nome</label>
      <input type="text" name="nome" placeholder="  Digite seu nome" />
      <label class='label1'>Email</label>
      <input type="text" name="email" placeholder="  Digite seu email" />
      <label class='label1'>Senha</label>
      <input type="text" name="senha" placeholder="  Digite sua senha" />
      <label class='label1'>Confirmar Senha</label>
      <input type="text" name="Confirmare sua senha" placeholder="  Confirmar senha" />
      <button id='cadastrar'>CADASTRAR</button>
    </container>

    <img id='camera' src={camera}></img>

      <img id='filmeDireito' src={filmeDireito}></img>
      <img id='filmeEsquerdo' src={filmeEsquerdo}></img>
    </>
  )
}

export default Index