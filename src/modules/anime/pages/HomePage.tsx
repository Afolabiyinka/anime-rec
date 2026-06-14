import { ArrowClockwiseIcon, SmileyBlankIcon } from "@phosphor-icons/react";
import HeroSwiperSkeleton from "../components/HeroSkeleton";
import HeroSwiper from "../components/HeroSwiper";
import { useGetTopAnimes } from "../hooks/useGetTopAnime";
import CustomBtn from "@/components/custom/CustomBtn";

const HomePage = () => {
  const { data, isLoading, error, refetch } = useGetTopAnimes();

  if (isLoading) {
    return <HeroSwiperSkeleton />;
  }

  if (error) {
    <div className="flex justify-center items-center flex-col gap-4 text-center">
      <SmileyBlankIcon />
      <h1 className="md:text-3xl text-xl">O'ops Something went wrong</h1>

      <CustomBtn
        text="Retry"
        startIcon={ArrowClockwiseIcon}
        onClick={() => refetch()}
      />
    </div>;
  }
  return (
    <div className="md:p-4 p-2">
      {data && <HeroSwiper animes={data?.data} />}
    </div>
  );
};

export default HomePage;
