import React from 'react';
import Styles from './Header.module.css';
import RedeSociais from '../RedeSociais/RedeSociais';

const Header = () => {
  return (
    <div className={Styles.Container} id="Home">
      <div className={Styles.Container2} id="Home">
        <RedeSociais posicao="right" />
        <div className={Styles.ContainerH1}>
          <h1>Cuide Bem da sua Pele</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
