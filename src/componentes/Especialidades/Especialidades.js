import React from 'react';
import Cards from '../Cards/Cards';
import TextoCabe from '../TextoCabe/TextoCabe';
import Styles from './Especialidades.module.css';
import Button from '../Button/Button';
import TextoCorpo from '../TextoCorpo/TextoCorpo';

const Especialidades = () => {
  return (
    <div className={Styles.Container} id="Especialidades">
      <TextoCabe texto="Depilação Facial e Corporal Feminina" />
      <TextoCorpo texto=" Ajudam a causar menos irritações na pele na comparação com a depilação com lâmina, na depilação com cera, os pelos são retirados desde a raiz. Por isso, a pele fica mais lisa e macia, uma vez que não restam pontinhas dos fios na superfície das áreas depiladas." />
      <Button
        nome="Agende um horário"
        tamanho="11rem"
        cor="#ef8354"
        corFonte="#eee"
        largura="1rem"
        link="https://wa.me/5511939379761?text=Ol%C3%A1%21+Estou+no+seu+site+e+gostaria+de+agendar+um+horário"
      />

      <Cards />
    </div>
  );
};

export default Especialidades;
