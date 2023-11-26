import { useState, useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import axios from "axios";
import styles from "./search.module.scss";
import { Card } from "../components/Card/Card";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

const Search = () => {
  const router = useRouter();

  const { query } = router.query;

  console.log(query);

  const search = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/multi?api_key=abff7a99b8f97c6f37ba8e4ee5382d72&language=pt-BR&query=${query}`
    );
    console.log(data.results);

    return data.results;
  };

  const { data: results, isLoading, isError } = useQuery(
    ["search", query],
    search
  );

  console.log(results)
  


  return (
    <div className={styles.container}>
      <Head>
        <title>Search | {query}</title>
      </Head>
      <h1>Search</h1>

      <ul className={styles.container_results}>
        <Card movies={results} />
      </ul>
    </div>
  );
};

export default Search;
