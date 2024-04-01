import React from "react";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navbar-left">
        <h1>Admin</h1>
      </div>
      <div className="navbar-right">
        <a href="/admin/products">Products</a>
        <a href="/admin/orders">Orders</a>
        <a href="/admin/users">Users</a>
      </div>
    </div>
  );
};
