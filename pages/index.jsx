import Head from "next/head";
import axios from "axios";
import { useRouter } from "next/router";
import MovieDisplay from "../components/MovieDisplay/MovieDisplay";

export default function Home({ movies }) {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Next Movie</title>
      </Head>

      <main>
        <h1
          style={{
            textAlign: "center",
          }}
        >
          Next Film
        </h1>
        <MovieDisplay movies={movies} />
      </main>
    </div>
  );
}

export const getStaticProps = async () => {
  const res = await axios.get("https://api.themoviedb.org/3/movie/popular?api_key=abff7a99b8f97c6f37ba8e4ee5382d72&language=en-US&page=1");
  const movies = res.data.results;
  return {
    props: {
      movies,
    },
    revalidate: 10,
  };
};
