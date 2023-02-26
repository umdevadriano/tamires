import React from 'react';
import Styles from './Header.module.css';
import RedeSociais from '../RedeSociais/RedeSociais';

const Header = () => {
  return (
    <div className={Styles.Container} id="Home">
      <div className={Styles.Container2} id="Home">
        <RedeSociais posicao="right" />
      </div>
    </div>
  );
};

export default Header;
