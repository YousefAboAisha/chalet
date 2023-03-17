import ChaletCards from "Containers/Home/chaletCards";
import Landing from "Containers/Home/landing";
import Popular from "Containers/Home/popular";
import Subscripe from "Containers/Home/subscripe";
import Value from "Containers/Home/value";
import VideoHero from "Containers/Home/video";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>Chalet | Home</title>
        <meta
          name="description"
          content="Chalet website, resorts, renting, show case"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Landing />
      <div className="container overflow-hidden">
        <Popular />
        <Value />
        <VideoHero />
        <ChaletCards />
        <Subscripe />
      </div>
    </>
  );
};

export default Home;
