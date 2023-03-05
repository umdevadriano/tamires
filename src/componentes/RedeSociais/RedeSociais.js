import React from 'react';
import SvgInstagram from '../SvgInstagram/SvgInstagram';
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
    </div>
  );
};

export default RedeSociais;
