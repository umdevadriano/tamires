import React from 'react';
import CardProfissional from '../CardProfissional/CardProfissional';
import Styles from './Cards.module.css';
import imagem1 from './depilacão/1.jpeg';
import imagem2 from './depilacão/2.jpeg';
import imagem3 from './depilacão/3.jpeg';
import imagem4 from './depilacão/4.jpeg';
import imagem5 from './depilacão/5.jpeg';
import imagem6 from './depilacão/6.jpeg';
import imagem7 from './depilacão/7.jpeg';

const Cards = () => {
  return (
    <div className={Styles.Container}>
      <CardProfissional foto={imagem1} />
      <CardProfissional foto={imagem2} />
      <CardProfissional foto={imagem3} />
      <CardProfissional foto={imagem4} />
      <CardProfissional foto={imagem5} />
      <CardProfissional foto={imagem6} />
      <CardProfissional foto={imagem7} />
    </div>
  );
};

export default Cards;
