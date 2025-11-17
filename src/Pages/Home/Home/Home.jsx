import React from "react";
import Banner from "../Banner";
import Main from "../Main";
import OurServices from "../OurServices";
import Brands from "../Brands";
import Reviews from "../Reviews";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <>
      <Banner></Banner>;<Main></Main>
      <OurServices></OurServices>)<Brands></Brands>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </>
  );
};

export default Home;
