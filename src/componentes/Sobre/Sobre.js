import React from 'react';
import CardProfissional from '../CardProfissional/CardProfissional';
import TextoCabe from '../TextoCabe/TextoCabe';
import TextoCorpo from '../TextoCorpo/TextoCorpo';
import Styles from './Sobre.module.css';
import imagem from '../CardProfissional/limpezadepele.jpg';

const Sobre = () => {
  return (
    <div className={Styles.Container} id="Sobre">
      <TextoCabe texto="Sobre nós" />
      <div className={Styles.ContainerProfissional}>
        <CardProfissional
          titulo="Tamires silva"
          texto="Esteticista Limpeza de pele Profunda, Epilação Facial & Corporal Feminina"
          foto={imagem}
        />
        <TextoCorpo
          texto="
          Transformando Depilação em Autoestima!💕
          🔸Especialista em Depilação Feminina"
        />
      </div>
    </div>
  );
};

export default Sobre;
