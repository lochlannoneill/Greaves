import React from "react";
import "./Breadcrumb.css";

export const Breadcrumb = (props) => {
  const { product } = props;
  return (
    <div className="breadcrumb">
      <a href="/">shop</a>&#160;&gt;&#160;
      <a href={`/${product.category}`}>{product.category}</a>&#160;&gt;&#160;
      <a href={`/products/${product.id}`}>{product.title}</a>
    </div>
  );
};
