import Head from "next/head";
import React from "react";
import HeadingTitle from "Components/UI/Typography/HeadingTitle";
import SingleSlider from "Components/UI/Sliders/SingleSlider";
import ChaletDetails from "Containers/Discover/ChaletDetails";

const Chalet = () => {
  return (
    <>
      <Head>
        <title>Wedding halls | Love Boat </title>
        <meta name="description" content="Chalet description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="relative w-11/12 md:w-8/12 lg:w-6/12 mx-auto mt-28">
        <HeadingTitle />

        <SingleSlider />

        <ChaletDetails />
      </div>
    </>
  );
};

export default Chalet;
