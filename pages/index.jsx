import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import MovieDisplay from "../components/MovieDisplay/MovieDisplay";

export default function Home({ movies }) {

  return (
    <div>
      <Head>
        <title>Next Movie</title>
      </Head>

      <main>
        <MovieDisplay movies={movies} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY_TMDB}&language=pt-BR&page=1`);
  const movies = res.data.results.map((item) => {
    return {
      ...item,
      urlMovie: `${process.env.URL_PLAY}${item.id}`
    }
  })

  return {
    props: {
      movies,
    },
    revalidate: 10,
  };
};
