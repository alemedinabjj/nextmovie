// Accordion.js
import React, { useState } from 'react';
import styles from './Accordion.module.scss';

export const Accordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`${styles.accordion} ${isOpen ? styles.open : ''}`} onClick={toggleAccordion}>
      <div className={styles.accordionHeader}>
        <h3>{title}</h3>
        <span className={`${styles.arrow} ${isOpen ? styles.open : ''}`}>&#9654;</span>
      </div>
      {isOpen && <div className={styles.accordionContent}>{content}</div>}
    </div>
  );
};

export default Accordion;
