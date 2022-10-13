export const DetailDisplay = ({ movie }) => {
  return (
    <div className={styles.container}>
      <div className={styles.container_image}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
      </div>
      <div className={styles.container_info}>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
};
