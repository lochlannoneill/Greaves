import React from "react";
import { Link } from "react-router-dom";
import "./Table.css";

export const Table = () => {
  return (
    <div className="table">
      <Link to={"/products"}>
        <div className="table-item">Products</div>
      </Link>
      <Link to={"/users"}>
        <div className="table-item">Users</div>
      </Link>
      <Link to={"/reviews"}>
        <div className="table-item">Reviews</div>
      </Link>
    </div>
  );
};
