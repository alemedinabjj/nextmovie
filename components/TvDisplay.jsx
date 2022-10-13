import Link from "next/link";
import { Card } from "./Card/Card";
import { Pagination } from "./Pagination/Pagination";
import { useRouter } from "next/router";

const TvDisplay = ({ tv, pageid }) => {
  if (isNaN(pageid)) {
    pageid = 1;
  }

  const router = useRouter();

  const handleNext = () => {
    router.push(`/tv/popular/page/${parseInt(pageid) + 1}`);
  };

  const handlePrev = () => {
    router.push(`/tv/popular/page/${parseInt(pageid) - 1}`);

    if (pageid === 1) {
      router.push(`/tv/popular/page/${parseInt(pageid)}`);
    }
  };

  return (
    <>
      <Card movies={tv} />
      <Pagination handleNext={handleNext} handlePrev={handlePrev} />
    </>
  );
};

export default TvDisplay;
