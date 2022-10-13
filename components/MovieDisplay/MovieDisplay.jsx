import { Card } from "../Card/Card";
import { Pagination } from "../Pagination/Pagination";
import styles from "./styles.module.scss";
import { useRouter } from "next/router";

const MovieDisplay = ({ movies, pageid }) => {
  if (isNaN(pageid)) {
    pageid = 1;
  }

  const router = useRouter();

  const handleNextMovie = () => {
    router.push(`/movies/popular/page/${parseInt(pageid) + 1}`);
  };

  const handlePrevMovie = () => {
    router.push(`/movies/popular/page/${parseInt(pageid) - 1}`);
    if (pageid === 1) {
      router.push(`/movies/popular/page/${parseInt(pageid)}`);
    }
  };

  console.log(movies);

  return (
    <div className={styles.container}>
      <Card movies={movies} />
      <Pagination handleNextMovie={handleNextMovie} handlePrevMovie={handlePrevMovie} />
    </div>
  );
};

export default MovieDisplay;
