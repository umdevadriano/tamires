import React from 'react';
import CardProfissional from '../CardProfissional/CardProfissional';
import TextoCabe from '../TextoCabe/TextoCabe';
import TextoCorpo from '../TextoCorpo/TextoCorpo';
import Styles from './Sobre.module.css';
import imagem from '../CardProfissional/pexels-mikhail-nilov-8730758.png';

const Sobre = () => {
  return (
    <div className={Styles.Container} id="Sobre">
      <TextoCabe texto="Sobre nós" />
      <div className={Styles.ContainerProfissional}>
        <CardProfissional
          titulo="Camila santos"
          texto="Advogada especialista em Direito da Família, formou-se pela UERJ e já possui mais de 10 anos de atuação nos tribunais."
          foto={imagem}
        />
        <TextoCorpo
          texto="
        A Escritório Advogados é formada por advogados com especialização,   pós graduação e mestrado nas mais importantes universidades públicas  e privadas do Brasil, passando por constantes atualizações em seus currículos para um melhor atendimento ao público alvo de nosso escritório."
        />
      </div>
    </div>
  );
};

export default Sobre;
