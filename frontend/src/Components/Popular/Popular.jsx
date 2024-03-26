
import React from "react";
import products from "../../Assets/products/product_data.js";
import { ItemList } from "../ItemList/ItemList";
import "./Popular.css";

export const Popular = () => {
  return (
    <div className="popular">
      <div className="popular-category popular-women">
        <h1>Popular in Women</h1>
        <div className="popular-list">
          <ItemList products={products} category="Women" />
        </div>
      </div>

      <div className="popular-category popular-men">
        <h1>Popular in Men</h1>
        <div className="popular-list">
          <ItemList products={products} category="Men" />
        </div>
      </div>
    </div>
  );
};
