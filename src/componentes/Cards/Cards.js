import React from 'react';
import CardProfissional from '../CardProfissional/CardProfissional';
import Styles from './Cards.module.css';
import imagem from '../CardProfissional/limpezadepele.jpg';

const Cards = () => {
  return (
    <div className={Styles.Container}>
      <CardProfissional
        titulo="LIMPEZA DE PELE"
        texto="Ultrassom Micro e Macro focado + famoso do Mundo, Resultados Incríveis já na 1° sessão!! Lifting Facial Imediato, indicado 1 sessão anual."
        foto={imagem}
      />
      <CardProfissional
        titulo="LIMPEZA DE PELE"
        texto="Ultrassom Micro e Macro focado + famoso do Mundo, Resultados Incríveis já na 1° sessão!! Lifting Facial Imediato, indicado 1 sessão anual."
        foto={imagem}
      />
      <CardProfissional
        titulo="LIMPEZA DE PELE"
        texto="Ultrassom Micro e Macro focado + famoso do Mundo, Resultados Incríveis já na 1° sessão!! Lifting Facial Imediato, indicado 1 sessão anual."
        foto={imagem}
      />
    </div>
  );
};

export default Cards;
