import styles from "./styles.module.scss";
import Image from "next/image";
import { useRouter } from "next/router";

export const Card = ({ movies, moreDetails }) => {

  return (
    <ul className={styles.movieDisplay__list}>
      {movies?.map((movie) => (
        <div onClick={() => moreDetails(movie.id)} key={movie.id}>
          <div className={styles.movieDisplay__container}>
            <li key={movie.id} className={styles.movieDisplay__item}>
              <h2 className={styles.movieDisplay__title}>
                {movie.title
                  ? movie.title.length > 20
                    ? movie.title.slice(0, 20) + "..."
                    : movie.title
                  : movie.name.length > 20
                  ? movie.name.slice(0, 20) + "..."
                  : movie.name}{" "}
                {movie.release_date?.slice(0, 4)}
              </h2>
              <Image
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                width={300}
                height={450}
                layout="responsive"
                objectFit="cover"
                //blur up effect
                placeholder="blur"
                blurDataURL={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
            </li>
          </div>
        </div>
      ))}
    </ul>
  );
};
