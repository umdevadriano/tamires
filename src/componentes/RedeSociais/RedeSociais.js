import React from 'react';
import SvgInstagram from '../SvgInstagram/SvgInstagram';
import SvgWhatsapp from '../SvgWhatsapp/SvgWhatsapp.js';
import Styles from './RedeSociais.module.css';

const RedeSociais = (props) => {
  return (
    <div
      className={Styles.Container}
      style={{ justifyContent: `${props.posicao}`, alignItems: 'flex-end' }}
    >
      <a href="https://www.instagram.com/tammiestetica/" target="blank">
        <SvgInstagram />
      </a>
      <a
        href="https://wa.me/5511939379761?text=Ol%C3%A1%21+Estou+no+seu+site+e+gostaria+de+agendar+um+horário"
        target="blank"
      >
        <SvgWhatsapp />
      </a>
    </div>
  );
};

export default RedeSociais;
