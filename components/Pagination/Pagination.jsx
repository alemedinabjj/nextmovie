import styles from "./styles.module.scss";

export const Pagination = ({ handlePrev, handleNext, handlePrevMovie, handleNextMovie }) => {
  let location = typeof window !== "undefined" && window.location.toString().includes("tv");
  const page = typeof window !== "undefined" && window.location.toString().includes("page/1");

  return (
    <>
      <div className={styles.pagination}>
        <button onClick={location ? handlePrev : handlePrevMovie} className={styles.button} disabled={page ? true : false}>
          Prev
        </button>
        <button onClick={location ? handleNext : handleNextMovie} className={styles.button}>
          Next
        </button>
      </div>
    </>
  );
};
