import React from "react";
import products_women from "../../Assets/products/product_data_popular_women.js";
import products_men from "../../Assets/products/product_data_popular_men.js";
import { Item } from "../Item/Item";
import "./Popular.css";

export const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-category popular-women">
        <h1>Popular in Women</h1>
        <div className="popular-list">
          <div className="popular-item">
            {products_women.map((item, index) => {
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

      <div className="popular-category popular-men">
        <h1>Popular in Men</h1>
        <div className="popular-list">
          <div className="popular-item">
            {products_men.map((item, index) => {
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
    </div>
  );
};
