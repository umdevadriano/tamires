import React from 'react';
import Especialidades from '../Especialidades/Especialidades';
import Sobre from '../Sobre/Sobre';
import Styles from './Main.module.css';
import Contato from '../Contato/Contato';
import Feedback from '../Feedback/Feedback';
import Limpeza from '../Limpeza/Limpeza';

const Main = () => {
  return (
    <div className={Styles.Container}>
      <Especialidades />
      <Limpeza />
      <Feedback />
      <Sobre />
      <Contato />
    </div>
  );
};

export default Main;
