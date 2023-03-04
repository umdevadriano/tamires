import React from 'react';
import CardProfissional from '../CardProfissional/CardProfissional';
import Styles from './Limpeza.module.css';
import imagem1 from './imagensLimpeza/1.jpeg';
import imagem2 from './imagensLimpeza/2.jpeg';
import imagem3 from './imagensLimpeza/3.jpeg';
import imagem4 from './imagensLimpeza/4.jpeg';
import imagem5 from './imagensLimpeza/5.jpeg';
import TextoCabe from '../TextoCabe/TextoCabe';
import TextoCorpo from '../TextoCorpo/TextoCorpo';

const Limpeza = () => {
  return (
    <div className={Styles.Container}>
      <TextoCabe texto="Limpeza de Pele" />
      <TextoCorpo texto="A limpeza de pele é ideal para remover as impurezas do rosto, fechar os poros e diminuir a oleosidade, ajuda a prevenir o surgimento de cravos e espinhas. Uma boa limpeza de pele feita em consultório pode não só tratar as espinhas que já existem no rosto como, também, prevenir que novas inflamações se formem." />
      <CardProfissional
        titulo="LIMPEZA DE PELE"
        texto="Ultrassom Micro e Macro focado + famoso do Mundo, Resultados Incríveis já na 1° sessão!! Lifting Facial Imediato, indicado 1 sessão anual."
        foto={imagem1}
      />
      <CardProfissional
        titulo="LIMPEZA DE PELE"
        texto="Ultrassom Micro e Macro focado + famoso do Mundo, Resultados Incríveis já na 1° sessão!! Lifting Facial Imediato, indicado 1 sessão anual."
        foto={imagem2}
      />
      <CardProfissional
        titulo="LIMPEZA DE PELE"
        texto="Ultrassom Micro e Macro focado + famoso do Mundo, Resultados Incríveis já na 1° sessão!! Lifting Facial Imediato, indicado 1 sessão anual."
        foto={imagem3}
      />
      <CardProfissional
        titulo="LIMPEZA DE PELE"
        texto="Ultrassom Micro e Macro focado + famoso do Mundo, Resultados Incríveis já na 1° sessão!! Lifting Facial Imediato, indicado 1 sessão anual."
        foto={imagem4}
      />
      <CardProfissional
        titulo="LIMPEZA DE PELE"
        texto="Ultrassom Micro e Macro focado + famoso do Mundo, Resultados Incríveis já na 1° sessão!! Lifting Facial Imediato, indicado 1 sessão anual."
        foto={imagem5}
      />
    </div>
  );
};

export default Limpeza;
