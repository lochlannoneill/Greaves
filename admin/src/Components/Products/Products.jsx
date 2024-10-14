import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
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
      const imageUrls = [];
      for (const image of productDetails.images) {
        const formData = new FormData();
        formData.append("image", image);
        const response = await fetch("http://localhost:4000/images", {
          method: "POST",
          body: formData,
        });
        const responseData = await response.json();
        imageUrls.push(responseData.image_url); // Use image URL from Azure Blob Storage
      }

      // Once image URLs are ready, update product details
      const finalProductDetails = { ...productDetails, images: imageUrls };

      // Now send the final product details with image URLs
      const productResponse = await fetch("http://localhost:4000/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(finalProductDetails),
      });
      const productData = await productResponse.json();
      console.log(productData);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const imageHandler = (e) => {
    const files = Array.from(e.target.files);

    // Create data URLs for each file for preview
    const newImagePreviews = files.map((file) => URL.createObjectURL(file));

    // Store file objects and previews separately
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      images: [...prevDetails.images, ...files], // Store the actual file objects
      imagePreviews: [
        ...(prevDetails.imagePreviews || []),
        ...newImagePreviews,
      ], // Store the preview URLs
    }));
  };

  const removeImage = (index) => {
    URL.revokeObjectURL(productDetails.imagePreviews[index]); // Release memory
    setProductDetails((prevDetails) => ({
      ...prevDetails,
      images: prevDetails.images.filter((_, i) => i !== index),
      imagePreviews: prevDetails.imagePreviews.filter((_, i) => i !== index),
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
          {productDetails.imagePreviews &&
            productDetails.imagePreviews.map((imageDataUrl, index) => (
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
            <div className="image-preview-expand">
              <FontAwesomeIcon
                className="image-preview-expand-icon"
                icon={faPlus}
              />
            </div>
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
