import React from 'react';
import Cards from '../Cards/Cards';
import TextoCabe from '../TextoCabe/TextoCabe';
import Styles from './Especialidades.module.css';
import Button from '../Button/Button';

const Especialidades = () => {
  return (
    <div className={Styles.Container} id="Especialidades">
      <TextoCabe texto="DE ESTÉTICA FACIAL" />

      <Button
        nome="Agende um horário"
        tamanho="11rem"
        cor="#ef8354"
        corFonte="#eee"
        largura="1rem"
        link="https://wa.me/5511984835370?text=Ol%C3%A1%21+Estou+no+site+e+gostaria+de+agendar+um+horário"
      />

      <Cards />
    </div>
  );
};

export default Especialidades;
