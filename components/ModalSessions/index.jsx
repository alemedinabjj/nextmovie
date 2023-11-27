import { useState } from 'react';
import styles from './Modal.module.scss';
import { X } from 'lucide-react';

export function ModalSessions({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
    <button className={styles.btn}
      onClick={() => setIsOpen(true)}
    >
      {title}
    </button>

    <div className={
      `${styles.modal} ${isOpen ? styles.open : ''}`
    }>
      <div className={styles.modal__overlay}></div>
      <div className={styles.modal__content}>
        <div className={styles.modal__header}>
          <h2>
            {title}
          </h2>
          <button className={styles.modalClose}
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
          </button>
        </div>
        <div className={styles.modal__body}>
          {content}
        </div>
        <div className={styles.modal__footer}>
          <button className={styles.btn}
            onClick={() => setIsOpen(false)}
          >Cancel</button>
        </div>
      </div>
    </div>
    </>
  )
}