import React from 'react';
import styles from './styles.css';

const Card = ({ title = '', children }) => (
  <div className={styles.cardWrapper}>
    <h1>{title}</h1>
    <div>
      { children }
    </div>
  </div>
)

export default Card;
