import React from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products }) => {
  return (
    <div className="shopcategory-products">
      {products.map((item, index) => (
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
