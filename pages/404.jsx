import { Undo2 } from "lucide-react";
import Head from "next/head";
import Link from "next/link";

import styles from "./404.module.scss";

//404 page
export default function Custom404() {
  return (
    <div className={styles.container}>
      <Head>
        <title>404 | Page not found</title>
      </Head>
      <h1>404</h1>
      <h2>Page not found</h2>
      <Link href="/">
        <a>
          <Undo2 size={24} />
          Back to home
        </a>
      </Link>
    </div>
  );
}