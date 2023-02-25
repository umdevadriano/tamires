import React from 'react';
import Banner from '../Banner/Banner';
import Especialidades from '../Especialidades/Especialidades';
import Sobre from '../Sobre/Sobre';
import Styles from './Main.module.css';
import imagem from '../Banner/profunda.jpg';
import Contato from '../Contato/Contato';

const Main = () => {
  return (
    <div className={Styles.Container}>
      <Especialidades />
      <Banner imagem={imagem} tamanho="100%" />
      <Sobre />
      <Contato />
    </div>
  );
};

export default Main;
