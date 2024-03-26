import React from "react";
import { Item } from "../Item/Item";
import "./ItemList.css";

export const ItemList = ({ products, category }) => {
  return (
    <div className="shopcategory-products">
      {products.map((item, index) => {
        // Check if category is defined before converting to lowercase
        if (item.category?.toLowerCase() === category.toLowerCase()) {
          return (
            <Item
              key={index}
              id={item.id}
              title={item.title}
              img={item.image}
              price={item.price}
              price_previous={item.price_previous}
              reviews={item.reviews}
            />
          );
        } else {
          return null;
        }
      })}
    </div>
  );
};
