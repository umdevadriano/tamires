import React from 'react';
import TextoRoda from '../TextoRoda/TextoRoda';
import Styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={Styles.Container}>
      <TextoRoda
        texto=" Copyright © 2023 - Site de Estética | Desenvolvido por: Sampaio S.S
        "
      />
    </div>
  );
};

export default Footer;
