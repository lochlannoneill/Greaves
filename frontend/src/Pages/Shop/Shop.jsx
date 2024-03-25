import React from "react";
import { useEffect } from "react";
import { Hero } from "../../Components/Hero/Hero";
import { Divider } from "../../Components/Divider/Divider";
import { Popular } from "../../Components/Popular/Popular";
// import { Offers } from '../Components/Offers/Offers'
import { NewCollections } from "../../Components/NewCollections/NewCollections";

export const Shop = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <Hero />
      <Divider />
      <Popular />
      {/* <Offers/> */}
      <NewCollections />
    </div>
  );
};
