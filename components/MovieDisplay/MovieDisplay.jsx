import { useRouter } from "next/router";
import { Card } from "../Card/Card";
import styles from "./styles.module.scss";
import { useInfiniteQuery } from "react-query";
import { useEffect, useRef } from "react";


const MovieDisplay = ({ movies }) => {
  const apiKey = process.env.API_KEY_TMDB;

  const router = useRouter();

  const { page = 1 } = router.query 

  console.log(apiKey)

  async function fetchMovies(page) {
    const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=pt-BR&page=${page}`);
    const data = await res.json();

    console.log(data)
    return data;
  }

  const { data: moviesData, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery(["movies", page, apiKey], async ({ pageParam = 1 }) => 
    fetchMovies(pageParam)
  , 
  {
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialData: movies,
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  }
  );

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 1.0,
    };
  
    const callback = (entries) => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    };
  
    const observer = new IntersectionObserver(callback, options);
  
    const targetElement = document.getElementById("observer"); 
    if (targetElement) {
      observer.observe(targetElement);
    }
  
    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, []);

  const handleMovieDetail = (id) => {
    router.push(`/movie/${id}`);
  };

  return (
    <div className={styles.container}>
      {moviesData?.pages?.map((movie) => (
        <Card movies={movie.results} key={movie.page} moreDetails={handleMovieDetail} />
      ))}

      <div
        id="observer"
      ></div>
    </div>
  );
};

export default MovieDisplay;
