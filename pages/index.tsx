import ChaletCards from "Containers/Home/chaletCards";
import Landing from "Containers/Home/landing";
import Popular from "Containers/Home/popular";
import Value from "Containers/Home/value";
import VideoHero from "Containers/Home/video";

const Home = () => {
  return (
    <>
      <Landing />
      <div className="container overflow-hidden">
        <Popular />
        <Value />
        <VideoHero />
        <ChaletCards />
      </div>
    </>
  );
};

export default Home;
