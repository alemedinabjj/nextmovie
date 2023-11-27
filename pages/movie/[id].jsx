import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Undo2 } from 'lucide-react'

export default function Movie({ movie }) {
  const router = useRouter();

  if (router.isFallback) return <h1>Loading...</h1>;

  return (
    <div>
      <Head>
        <title>Next Movie | {movie.title}</title>
        <meta name="description" content={movie.overview} />
      </Head>

      <div className={styles.arts_container}>
        <div
          className={styles.backdrop}
        >
          <Image src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`} alt={movie.title} width={1920} height={1080} objectFit="contain" 
            placeholder="blur"
            blurDataURL={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
          />
        </div>

        <div
          className={styles.poster}
        >
          <Image src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} width={300} height={450} objectFit="cover" 
            placeholder="blur"
            blurDataURL={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          />
        
        </div>

      </div>

      <div className={styles.container}>
   
      <h1>
        {movie.title} {(
          new Intl.DateTimeFormat("pt-BR", {
            year: "numeric",
            month: "numeric",
            day: "numeric",
          }).format(new Date(movie.release_date))
        )}
      </h1>

      <blockquote>{movie.tagline}</blockquote>

      <p>{movie.overview}</p>


      <iframe
        width="560"
        height="315"
        src={movie.urlMovie}
        // src={`https://www.youtube.com/embed/${movie.urlMovie}`}
        title={movie.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen={true}
      ></iframe>
    </div>
      <button 
        className={styles.buttonBack}
        onClick={() => 
          router.back()
        }>
          <Undo2 />
        </button>
    </div>
  );
}

export const getStaticPaths = async () => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/now_playing?api_key=${process.env.API_KEY_TMDB}&language=pt-BR&page=1`);
  const movies = res.data.results;
  const paths = movies.map((movie) => ({
    params: {
      id: movie.id.toString(),
    },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY_TMDB}&language=pt-BR`);
  const movie = res.data

  movie.urlMovie = `${process.env.URL_PLAY}${movie.id}`

  return {
    props: {
      movie,
    },
    revalidate: 10,
  };
};
