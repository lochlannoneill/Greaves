import React from "react";
import products from "../../Assets/products/new_collections";
import { ItemList } from "../ItemList/ItemList";
import "./NewCollections.css";

export const NewCollections = () => {
  // Filter products for new collections
  const newCollectionsProducts = products.filter(
    (product) => product.tags && product.tags.includes("new")
  );

  return (
    <div className="new-collections">
      <h1>New Collections</h1>
      <div className="collections-parent">
        <div className="collections">
          <div className="collections-category">
            <div className="collections-list">
              <ItemList products={newCollectionsProducts} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
