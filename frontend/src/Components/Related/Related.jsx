import React from "react";
import products from "../../Assets/products/related";
import { Item } from "../Item/Item";
import "./Related.css";

export const Related = () => {
  return (
    <div className="related">
      <div className="related-items-parent">
        <h2>Related Products</h2>
        <div className="related-items">
          {products.map((item, index) => {
            return (
              <Item
                key={index}
                id={item.id}
                title={item.title}
                img={item.image}
                price={item.price}
                price_previous={item.price_previous}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
