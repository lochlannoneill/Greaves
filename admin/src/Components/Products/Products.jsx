import React from 'react'
import { useState } from 'react'
import upload_placeholder from "../../Assets/placeholder.jpg"
import "./Products.css"

export const Products = () => {
  return (
    <div className="products">
        <h2 className="products-add-heading">Add Product</h2>
        <div className="products-add-title field-row">
            <p>Title</p>
            <input type="text" name="title" placeholder="Required"/>
        </div>
        <div className="products-add-price field-row">
            <div className="products-add-price-group">
                <p>Price</p>
                <input type="text" name="price_old" placeholder="Required"/>
            </div>
            <div className="products-add-price-group">
                <p>Old Price</p>
                <input type="text" name="price" placeholder="Optional"/>
            </div>
        </div>
        <div className="products-add-category field-row">
            <p>Category</p>
            <select name="category">
                <option value="women">Women</option>
                <option value="men">Men</option>
                <option value="girls">Girls</option>
                <option value="boys">Boys</option>
            </select>
        </div>
        <div className="products-add-image">
            <p>Product Image</p>
            <label className="products-add-image" htmlFor="file-input">
                <img src={upload_placeholder} alt="Product"/>
            </label>
        </div>
        <div className="products-add-description">
            <p>Description</p>
            <textarea name="description" placeholder="Required"></textarea>
        </div>
        <button className="products-add-button">Add Product</button>
    </div>
  )
}
