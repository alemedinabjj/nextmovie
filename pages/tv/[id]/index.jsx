import axios from "axios";
import { Undo2 } from "lucide-react";
import Head from "next/head";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useState } from "react";
import { Seasons } from "../../../components/Seasons";

export default function TvDetails({ tv }) {
  console.log(tv)
  const [seasonCollapsed, setSeasonCollapsed] = useState(true);

  return (
    <div>
      <Head>
        <title>Next Movie | {tv.title}</title>
        <meta name="description" content={tv.overview} />
      </Head>

      <div className={styles.arts_container}>
        <div
          className={styles.backdrop}
        >
          <Image src={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`} alt={tv.title} width={1920} height={1080} objectFit="contain" 
            placeholder="blur"
            blurDataURL={`https://image.tmdb.org/t/p/original${tv.backdrop_path}`}
          />
        </div>

        <div
          className={styles.poster}
        >
          <Image src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} alt={tv.title} width={300} height={450} objectFit="cover" 
            placeholder="blur"
            blurDataURL={`https://image.tmdb.org/t/p/w500${tv.poster_path}`}
          />
        
        </div>

      </div>

      <div className={styles.container}>
   
      <h1>
        {tv.name} 
      </h1>

      <blockquote>{tv.tagline}</blockquote>

      <p>{tv.overview}</p>

      
      <div className={styles.seasons}>
        {tv.seasons.map((season) => (
         <Seasons key={season.id} season={season} />
        ))}
      </div>

    </div>
      <button 
        className={styles.buttonBack}
        onClick={() => 
          router.back()
        }>
          <Undo2 />
        </button>
    </div>
  )
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=${process.env.API_KEY_TMDB}&language=pt-BR`);
  const tv = res.data

  tv.seasons = tv.seasons.map((item) => {
    const episodes = [];

    for (let i = 0; i < item.episode_count; i++) {
      episodes.push({
        episode: i + 1,
        urlMovie: `${process.env.URL_SERIES}${tv.id}/${item.season_number}/${i + 1}`,
      })
    }

    return {
      ...item,
      episodes
    }
   
  }).filter((item) => item.season_number !== 0)

  return {
    props: {
      tv,
    },
    revalidate: 10,
  };
};

export const getStaticPaths = async () => {
  // const res = await axios.get(`https://api.themoviedb.org/3/tv/now_playing?api_key=${process.env.API_KEY_TMDB}&language=pt-BR&page=1`);
  // const movies = res.data.results;
  // const paths = movies.map((movie) => ({
  //   params: {
  //     id: movie.id.toString(),
  //   },
  // }));
  return { paths: [], fallback: "blocking" };
};

