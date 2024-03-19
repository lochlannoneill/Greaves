import React from "react";
import products from "../Assets/products/new_collections";
import { Item } from "../Item/Item";
import "./NewCollections.css";

export const NewCollections = () => {
  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <div className="collections-parent">
        <div className="collections">
          {products.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                title={item.title}
                img={item.image}
                price={item.price}
                price_old={item.price_old}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
