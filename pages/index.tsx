import Landing from "Containers/Home/landing";
import Popular from "Containers/Home/popular";

const Home = () => {
  return (
    <>
      <Landing />
      <div className="container">
        <Popular />
      </div>
    </>
  );
};

export default Home;
