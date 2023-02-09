import React from "react";
import {Link} from 'react-router-dom';
import style from './style.css';
import cineteclogo from '../../elementos/LogoCinetec.png';
import claqueteCima from '../../elementos/claqueteCima.svg'
import claqueteBaixo from '../../elementos/claqueteBaixo.svg'

function Index(){
  return (
    <><header>
      <img id='claqueteCima'src={claqueteCima} alt="Imamgem de claquete parte superior"/>
    </header>
      
        <nav>
       <img id='logo'src={cineteclogo} alt="Logotipo Cinetec"/>
          <ul>
            <Link to='paginaLogin'><li>Login</li> </Link>
            <Link to='paginaCadastro'><li>Cadastre-se</li> </Link>
          </ul>
        </nav>
      </>
  )
}

export default Index