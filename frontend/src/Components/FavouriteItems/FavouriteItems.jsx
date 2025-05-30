import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Item } from "../Item/Item";
import "./FavouriteItems.css";

export const FavouriteItems = () => {
  const { products, favorites } = useContext(ShopContext);

  return (
    <div className="favouriteitems">
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p className="favouriteitems-message">No items in favorites</p>
      ) : (
        <div className="favouriteitems-item-list">
          {favorites.map((favoriteId) => {
            const product = products.find((item) => item.id === favoriteId);
            if (product) {
              return (
                <Item
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  images={product.images}
                  price={product.price}
                  price_previous={product.price_previous}
                />
              );
            } else {
              return null;
            }
          })}
        </div>
      )}
    </div>
  );
};
