import React, { useContext } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../Context/ShopContext";
import { Breadcrumb } from "../Components/Breadcrumbs/Breadcrumb";
import { ProductDisplay } from "../Components/ProductDisplay/ProductDisplay";
import { Related } from "../Components/Related/Related";
import { Reviews } from "../Components/Reviews/Reviews";
import "./CSS/Product.css";

export const Product = () => {
  const { products, reviews } = useContext(ShopContext);
  const { id } = useParams();
  const product = products.find((e) => e.id === Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div className="product">
      <div className="product-components">
        <Breadcrumb product={product} />
        <ProductDisplay product={product} />
        <Related />
        <Reviews reviews={reviews} productId={product.id} />
      </div>
    </div>
  );
};
