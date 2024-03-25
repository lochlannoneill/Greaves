import React from "react";
import { useEffect } from "react";
import { FavouriteItems } from "../../Components/FavouriteItems/FavouriteItems";

export const Favourites = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="favourites">
      <FavouriteItems />
    </div>
  );
};

export default Favourites;
