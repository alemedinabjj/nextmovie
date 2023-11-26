import { useRouter } from "next/router";
import { Card } from "../Card/Card";
import { Pagination } from "../Pagination/Pagination";
import styles from "./styles.module.scss";
import { useQuery } from "react-query";


const MovieDisplay = ({ movies }) => {
  const apiKey = process.env.API_KEY_TMDB;

  const router = useRouter();

  const { page = 1 } = router.query 

  console.log(apiKey)

  const { data: moviesData, isLoading, isError } = useQuery(["movies", page, apiKey], async () => {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${page}`);
    const data = await res.json();
    return data.results;
  }, 
  {
    initialData: movies,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  }
  );


  const handleNextMovie = () => {
    router.push(`/?page=${parseInt(page) + 1}`);
  };

  const handlePrevMovie = () => {

    //se for menor que 1, não faz nada
    if (parseInt(page) <= 1) return;

    router.push(`/?page=${parseInt(page) - 1}`);

  };

  console.log(moviesData);

  return (
    <div className={styles.container}>
      <Card movies={moviesData} />
      <Pagination handleNextMovie={handleNextMovie} handlePrevMovie={handlePrevMovie} />
    </div>
  );
};

export default MovieDisplay;
