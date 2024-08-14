import React from "react";
import Hero from "./../../components/unique/Hero/Hero";
import Products from "./../../components/unique/Products/Products";
import useScrollToTop from "../../hooks/useScrollToTop";

const HomePage: React.FC = () => {
  useScrollToTop();
  return (
    <>
      <Hero />
    </>
  );
};

export default HomePage;
