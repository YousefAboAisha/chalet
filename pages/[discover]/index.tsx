import ChaletCards from "Containers/Discover/chaletCards";
import Filters from "Containers/Discover/filters";
import Landing from "Containers/Discover/landing";
import Head from "next/head";
import React from "react";

const discover = () => {
  return (
    <>
      <Head>
        <title>Wedding halls | Discover</title>
        <meta
          name="description"
          content="Chalet website, resorts, renting, show case, discover new chalets"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className={"mt-[70px]"}>
        <Landing />
        <div className="container">
          <Filters />
          <ChaletCards />
        </div>
      </div>
    </>
  );
};

export default discover;
