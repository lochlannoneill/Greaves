import React from "react";
import { useState } from "react";
import upload_placeholder from "../../Assets/placeholder.jpg";
import "./Products.css";

export const Products = () => {
  const [productDetails, setProductDetails] = useState({
    title: "",
    price: "",
    price_previous: "",
    category: "women", // Default category
    description: "",
    images: [],
    tags: [],
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProductDetails((prevDetails) => ({ ...prevDetails, [name]: value }));
  };

  const AddProduct = async () => {
    console.log(productDetails);
    try {
      const formData = new FormData();
      formData.append("title", productDetails.title);
      formData.append("price", productDetails.price);
      formData.append("price_previous", productDetails.price_previous);
      formData.append("category", productDetails.category);
      formData.append("description", productDetails.description);
      productDetails.images.forEach((image) => {
        formData.append("images", image); // Expect images as array
      });
      productDetails.tags.forEach((tag) => {
        formData.append("tags", tag); // Expect tags as array
      });
      const response = await fetch("http://localhost:4000/products", {
        method: "POST",
        body: formData,
      });
      const responseData = await response.json();
      console.log(responseData);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const imageHandler = (e) => {
    const files = Array.from(e.target.files);
    Promise.all(
      files.map((file) => {
        return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (e) => {
            resolve(e.target.result);
          };
          reader.onerror = reader.onabort = reject;
          reader.readAsDataURL(file);
        });
      })
    ).then((images) => {
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        images: [...prevDetails.images, ...images],
      }));
    });
  };

  const removeImage = (index) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      images: prevDetails.images.filter((_, i) => i !== index),
    }));
  };

  const handleTagInputChange = (e) => {
    let value = e.target.value.trim().toLowerCase();
    if (value.includes(",")) {
      const newTags = value
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => /^[a-z]+$/.test(tag))
        .filter((tag) => tag !== "")
        .filter((tag) => !productDetails.tags.includes(tag));
      setProductDetails((prevDetails) => ({
        ...prevDetails,
        tags: [...prevDetails.tags, ...newTags],
      }));
      e.target.value = "";
    }
  };
  const removeTag = (index) => {
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      tags: prevDetails.tags.filter((_, i) => i !== index),
    }));
  };
  
  return (
    <div className="products">
      <h2 className="products-add-heading">Add Product</h2>
      <div className="products-add-title field-row">
        <p>Title</p>
        <input
          value={productDetails.title}
          onChange={changeHandler}
          type="text"
          name="title"
          placeholder="Required"
        />
      </div>
      <div className="products-add-price field-row">
        <div className="products-add-price-group">
          <p>Price</p>
          <input
            value={productDetails.price}
            onChange={changeHandler}
            type="text"
            name="price"
            placeholder="Required"
          />
        </div>
        <div className="products-add-price-group">
          <p>Old Price</p>
          <input
            value={productDetails.price_previous}
            onChange={changeHandler}
            type="text"
            name="price_previous"
            placeholder="Optional"
          />
        </div>
      </div>
      <div className="products-add-category field-row">
        <p>Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="girls">Girls</option>
          <option value="boys">Boys</option>
        </select>
      </div>
      <div className="products-add-image">
        <p>Images</p>
        <div className="image-preview-container">
          {productDetails.images.map((imageDataUrl, index) => (
            <div key={index} className="image-preview">
              <img src={imageDataUrl} alt={`Product ${index + 1}`} />
              <button
                className="image-preview-remove"
                onClick={() => removeImage(index)}
              >
                X
              </button>
            </div>
          ))}
          <label className="image-preview placeholder" htmlFor="file-input">
            <img src={upload_placeholder} alt="Upload" />
            <input
              onChange={imageHandler}
              type="file"
              name="image"
              id="file-input"
              multiple
              hidden
            />
          </label>
        </div>
      </div>
      <div className="products-add-description">
        <p>Description</p>
        <textarea
          value={productDetails.description}
          onChange={changeHandler}
          name="description"
          placeholder="Required"
        ></textarea>
      </div>
      <div className="products-add-tags field-row">
        <p>Tags</p>
        <div className="tags-container">
          {productDetails.tags.map((tag, index) => (
            <div key={index} className="tag">
              {tag}
              <button className="tag-remove" onClick={() => removeTag(index)}>
                X
              </button>
            </div>
          ))}
        </div>
        <input
          type="text"
          name="tags"
          placeholder="Separate with commas (letters only)"
          onChange={handleTagInputChange}
        />
      </div>
      <button onClick={AddProduct} className="products-add-button">
        Add Product
      </button>
    </div>
  );
};
