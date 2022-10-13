import Head from "next/head";
import axios from "axios";
import TvDisplay from "../../components/TvDisplay";

export const getServerSideProps = async () => {
  const response = await axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=abff7a99b8f97c6f37ba8e4ee5382d72&language=en-US&page=1`);

  const data = response.data.results;

  return {
    props: {
      data,
    },
  };
};

const Popular = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Popular TV Shows</title>
      </Head>
      <h1 style={{ textAlign: "center" }}>Popular TV Shows</h1>
      <TvDisplay tv={data} />
    </div>
  );
};

export default Popular;
