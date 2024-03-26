import React from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products, category }) => {
  // Filter products based on the category
  const filteredProducts = category
    ? products.filter((product) => product.category === category)
    : products;

  return (
    <div className="itemlist">
      {filteredProducts.map((item, index) => (
        <Item
          key={index}
          id={item.id}
          title={item.title}
          img={item.image}
          price={item.price}
          price_previous={item.price_previous}
          reviews={item.reviews}
        />
      ))}
    </div>
  );
};
