import axios from "axios";
import { useRouter } from "next/router";
import { Card } from "../../components/Card/Card";
import { useEffect } from "react";
import { useInfiniteQuery } from "react-query";
import styles from "./styles.module.scss";

export default function Tv({ tv }) {
  const router = useRouter();

  async function fetchTv(page) {
    const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY_TMDB}&language=pt-BR&page=${page}`);
    const data = await res.json();

    console.log(data)
    return data;
  }

  const { data: moviesData, isLoading, isError, isFetchingNextPage, hasNextPage, fetchNextPage } = useInfiniteQuery(["tv"], async ({ pageParam = 1 }) => 
  fetchTv(pageParam)
  , 
  {
    getNextPageParam: (lastPage) => {
      if (lastPage.page < lastPage.total_pages) {
        return lastPage.page + 1;
      }
      return undefined;
    },
    initialData: tv,
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

  const handleTvDetail = (id) => {
    router.push(`/tv/${id}`);
  };

  console.log(tv)
  return (
  <div className={styles.container}>
    {moviesData?.pages?.map((movie) => (
      <Card movies={movie.results} key={movie.page} moreDetails={handleTvDetail} />
    ))}

    <div
      id="observer"
    ></div>
  </div>
  )
}

export const getStaticProps = async () => {
  const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY_TMDB}&language=pt-BR&page=1`);
  const tv = res.data.results.map((item) => {
    return {
      ...item,
      urlMovie: `${process.env.URL_PLAY}${item.id}`
    }
  })

  return {
    props: {
      tv,
    },
    revalidate: 10,
  };
}