import axios from "axios";
import TvDisplay from "../../../../components/TvDisplay";
import Head from "next/head";

export const getServerSideProps = async ({ query }) => {
  const { pageid } = query;

  const res = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=abff7a99b8f97c6f37ba8e4ee5382d72&language=en-US&page=${pageid}`);
  const tv = res.data.results;
  return {
    props: {
      popularTv: tv,
      pageid: pageid,
    },
  };
};

export default function Popular({ popularTv, pageid }) {
  return (
    <div>
      <Head>
        <title>Tv Shows | page {pageid}</title>
      </Head>
      <TvDisplay tv={popularTv} pageid={pageid} />
    </div>
  );
}
