import React, { useContext } from 'react';
import { ShopContext } from '../../Context/ShopContext';
import { Item } from '../Item/Item'; // Import the Item component
import './FavouriteItems.css';

export const FavouriteItems = () => {
  const { products, favorites } = useContext(ShopContext);

  return (
    <div className="favouriteitems">
      <h1>My Favorites</h1>
      {favorites.length === 0 ? (
        <p>No items in favorites</p>
      ) : (
        <div className="favouriteitems-item-list">
          {favorites.map((favoriteId) => {
            const product = products.find((item) => item.id === favoriteId);
            if (product) {
              return <Item key={product.id} id={product.id} title={product.title} img={product.image} price={product.price} price_old={product.price_old} />;
            } else {
              return null;
            }
          })}
        </div>
      )}
    </div>
  );
};
