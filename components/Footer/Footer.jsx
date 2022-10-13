import styles from "./styles.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__logo}>
          <img src="" alt="Logo" />
        </div>
        <div className={styles.footer__links}>
          <ul>
            <li>
              <a className={styles.footer__link} href="#">
                Filmes
              </a>
            </li>
            <li>
              <a className={styles.footer__link} href="#">
                Séries
              </a>
            </li>
          </ul>
        </div>
        <p className={styles.footer__copy}>© 2022 - Todos os direitos reservados</p>
      </div>
    </footer>
  );
};
