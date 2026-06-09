import HeroSwiper from "../components/HeroSwiper";
import { useGetTopAnimes } from "../hooks/useGetTopAnime";

const HomePage = () => {
  const { data } = useGetTopAnimes();
  return (
    <div className="min-h-screen">
      {data && <HeroSwiper animes={data?.data} />}
    </div>
  );
};

export default HomePage;
