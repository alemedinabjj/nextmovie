import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";

export default function Movie({ movie }) {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading...</h1>;

  return (
    <div>
      <Head>
        <title>Next Movie | {movie.title}</title>
        <meta name="description" content={movie.overview} />
      </Head>

      <h1>{movie.title}</h1>
      <p>{movie.overview}</p>

      <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={300} height={450} objectFit="cover" />

      <button onClick={() => router.push("/")}>Back</button>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await axios.get("https://api.themoviedb.org/3/movie/now_playing?api_key=abff7a99b8f97c6f37ba8e4ee5382d72&language=en-US&page=1");
  const movies = res.data.results;
  const paths = movies.map((movie) => ({
    params: {
      id: movie.id.toString(),
    },
  }));
  return { paths, fallback: true };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=abff7a99b8f97c6f37ba8e4ee5382d72&language=en-US`);
  const movie = res.data;
  return {
    props: {
      movie,
    },
    revalidate: 10,
  };
};
