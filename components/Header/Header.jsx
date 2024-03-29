import { InputSearch } from "../InputSearch";
import styles from "./styles.module.scss";
import Link from "next/link";

export const Header = () => {


  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Filmes</a>
            </Link>
          </li>
          <li>
            <Link href="/tv">
              <a>Séries</a>
            </Link>
          </li>
          <li>
            <InputSearch />
          </li>
        </ul>
      </nav>
    </header>
  );
};
