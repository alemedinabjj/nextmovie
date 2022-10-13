import styles from "./detail.module.scss";
import Image from "next/image";
import Head from "next/head";
import axios from "axios";

export const getServerSideProps = async ({ query }) => {
  const { id } = query;

  let genreArray = [];
  const res = await axios.get(`https://api.themoviedb.org/3/tv/${id}?api_key=abff7a99b8f97c6f37ba8e4ee5382d72&language=en-US`);
  const data = await res.data;

  data.genres.map((genre) => {
    genreArray.push(genre.name);
  });

  return {
    props: {
      tv: data,
      genreArray: genreArray,
    },
  };
};

export default function Tv({ tv, genreArray }) {
  console.log(tv);
  return (
    <div>
      <Head>
        <title>{tv.name}</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image className={styles.image} src={`https://image.tmdb.org/t/p/w500${tv.poster_path}`} width={300} height={450} objectFit="cover" />
        </div>
        <div className={styles.infoContainer}>
          <h1 className={styles.title}>{tv.name}</h1>
          <p className={styles.overview}>{tv.overview}</p>
          <div className={styles.genres}>
            {genreArray.map((genre) => {
              return (
                <div className={styles.genre} key={genre}>
                  <p>{genre}</p>
                </div>
              );
            })}
          </div>
        </div>
        <button onClick={() => window.history.back()}>Back</button>
      </div>
    </div>
  );
}
