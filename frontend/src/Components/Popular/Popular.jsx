import React from "react";
import products from "../../Assets/products/product_data.js";
import { ItemList } from "../ItemList/ItemList";
import "./Popular.css";

export const Popular = () => {
  // Filter popular products for women and men
  const popularWomenProducts = products.filter(
    (product) =>
      product.tags?.includes("popular") && product.category === "women"
  );
  const popularMenProducts = products.filter(
    (product) => product.tags?.includes("popular") && product.category === "men"
  );

  return (
    <div className="popular">
      <div className="popular-category popular-women">
        <h1>Popular in Women</h1>
        <div className="popular-list">
          <ItemList products={popularWomenProducts} />
        </div>
      </div>

      <div className="popular-category popular-men">
        <h1>Popular in Men</h1>
        <div className="popular-list">
          <ItemList products={popularMenProducts} />
        </div>
      </div>
    </div>
  );
};
