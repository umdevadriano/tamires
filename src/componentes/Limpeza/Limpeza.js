import React from 'react';
import CardProfissional from '../CardProfissional/CardProfissional';
import Styles from './Limpeza.module.css';
import imagem1 from './imagensLimpeza/1.jpeg';
import imagem2 from './imagensLimpeza/2.jpeg';
import imagem3 from './imagensLimpeza/3.jpeg';
import imagem4 from './imagensLimpeza/4.jpeg';
import imagem5 from './imagensLimpeza/5.jpeg';
import TextoCabe from '../TextoCabe/TextoCabe';

const Limpeza = () => {
  return (
    <div className={Styles.Container}>
      <TextoCabe texto="Limpeza de Pele" />
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
