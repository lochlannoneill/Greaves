import React from "react";
import products from "../../Assets/products/product_data.js";
import { ItemList } from "../ItemList/ItemList";
import "./Popular.css";

export const Popular = () => {
  const popularWomenProducts = products.filter(
    (product) =>
      product.tags && product.tags.includes("popular") && product.category === "women"
  );
  const popularMenProducts = products.filter(
    (product) =>
      product.tags && product.tags.includes("popular") && product.category === "men"
  );

  return (
    <div className="popular">
      <div className="popular-category popular-women">
        <h1>Popular in Women</h1>
        <div className="popular-list">
          <ItemList products={popularWomenProducts} category="Women" />
        </div>
      </div>

      <div className="popular-category popular-men">
        <h1>Popular in Men</h1>
        <div className="popular-list">
          <ItemList products={popularMenProducts} category="Men" />
        </div>
      </div>
    </div>
  );
};
