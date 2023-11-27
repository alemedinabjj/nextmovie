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
      `https://api.themoviedb.org/3/search/multi?api_key=${process.env.API_KEY_TMDB}&language=pt-BR&query=${query}`
    );
    console.log(data.results);

    return data.results;
  };

  const { data: results, isLoading, isError } = useQuery(
    ["search", query],
    search
  );


  return (
    <div className={styles.container}>
      <Head>
        <title>Search | {query}</title>
      </Head>
      <h1>
        {query}
      </h1>

      <ul className={styles.container_results}>
        <Card movies={results} />
      </ul>
    </div>
  );
};

export default Search;
