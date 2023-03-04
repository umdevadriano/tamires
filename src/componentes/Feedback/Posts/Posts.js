import React from 'react';
import Styles from './Posts.module.css';
const Posts = (props) => {
  return (
    <div className={Styles.Container}>
      <img src={props.imagem} alt="Logo" />
    </div>
  );
};

export default Posts;
