import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import styles from "./search.module.scss";
import { Card } from "../components/Card/Card";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const search = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=abff7a99b8f97c6f37ba8e4ee5382d72&language=pt-BR&query=${query}`
    );
    setResults(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    if (query.length > 2) {
      search();
    }
  }, [query]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Search | {query}</title>
      </Head>
      <h1>Search</h1>

      <div className={styles.container_input}>
        <input
          type="text"
          placeholder="Search for a movie, tv show, person..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={styles.search_input}
        />
      </div>

      <ul className={styles.container_results}>
        <Card movies={results} />
      </ul>
    </div>
  );
};

export default Search;
