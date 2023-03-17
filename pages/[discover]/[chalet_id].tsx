import SingleSlider from "Components/UI/Sliders/SingleSlider";
import Slider from "Components/UI/Sliders/MultiSlider";
import HeadingTitle from "Components/UI/Typography/HeadingTitle";
import Head from "next/head";
import React from "react";
import ChaletDetails from "Containers/Discover/ChaletDetails";

const Chalet = () => {
  return (
    <>
      <Head>
        <title>Chalet | White chalet</title>
        <meta name="description" content="Chalet description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <div className="relative container mt-28">
        <div className="container">
          <HeadingTitle />

          <SingleSlider />

          <ChaletDetails />
        </div>
      </div>
    </>
  );
};

export default Chalet;
