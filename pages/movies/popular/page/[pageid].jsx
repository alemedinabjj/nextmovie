import { useRouter } from "next/router";
import MovieDisplay from "../../../../components//MovieDisplay/MovieDisplay";
import axios from "axios";

export const getServerSideProps = async ({ query }) => {
  const pageid = query.pageid;

  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=abff7a99b8f97c6f37ba8e4ee5382d72&language=en-US&page=${pageid}`);
  const movies = res.data.results;
  return {
    props: {
      popularMovies: movies,
      pageid: pageid,
    },
  };
};

export default function Popular({ popularMovies, pageid }) {
  return (
    <div>
      <MovieDisplay movies={popularMovies} pageid={pageid} />
    </div>
  );
}
