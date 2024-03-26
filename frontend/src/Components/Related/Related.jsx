import React from "react";
import products from "../../Assets/products/product_data.js";
import { ItemList } from "../ItemList/ItemList";
import "./Related.css";

export const Related = ({ tags }) => {
  // Filter products based on the current product's tags, excluding 'Popular' when filtering for related products
  const relatedProducts = products.filter((product) =>
    product.tags.some((tag) => tags.includes(tag) && tag !== "popular")
  );

  return (
    <div className="related">
      <div className="related-items-parent">
        <h2>Related Products</h2>
        <div className="related-items">
          <ItemList products={relatedProducts} />
        </div>
      </div>
    </div>
  );
};
