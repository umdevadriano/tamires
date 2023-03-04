import React from 'react';
import Styles from './Feedback.module.css';
import Posts from './Posts/Posts';
import imagem1 from './Posts/feedbacks/1.png';
import imagem2 from './Posts/feedbacks/2.png';
import imagem3 from './Posts/feedbacks/3.png';
import imagem4 from './Posts/feedbacks/4.png';
import TextoCabe from '../TextoCabe/TextoCabe';

const Feedback = () => {
  return (
    <div className={Styles.Container}>
      <TextoCabe texto="Clientes Satisfeitas" />
      <Posts imagem={imagem1} />
      <Posts imagem={imagem2} />
      <Posts imagem={imagem3} />
      <Posts imagem={imagem4} />
    </div>
  );
};

export default Feedback;
