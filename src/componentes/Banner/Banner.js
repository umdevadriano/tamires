import React from 'react';
import Styles from './Banner.module.css';

const Banner = (props) => {
  return (
    <div
      className={Styles.Container}
      style={{
        background: `linear-gradient( #1A1A1A, Transparent 100% , rgba(0, 0, 0, 0)100%), url(${props.imagem})`,
        backgroundAttachment: 'fixed',
        width: `${props.tamanho}`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: '0.1rem',
      }}
    ></div>
  );
};

export default Banner;
