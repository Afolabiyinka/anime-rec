import HeroSwiper from "../components/HeroSwiper";
import { useGetTopAnimes } from "../hooks/useGetTopAnime";

const HomePage = () => {
  const { data } = useGetTopAnimes();
  return (
    <div className="md:p-4 p-2">
      {data && <HeroSwiper animes={data?.data} />}
    </div>
  );
};

export default HomePage;
