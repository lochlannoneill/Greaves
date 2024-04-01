import React from 'react'
import { useState } from 'react'
import upload_placeholder from "../../Assets/placeholder.jpg"
import "./Products.css"

export const Products = () => {
    const [images, setImages] = useState([]);
    const imageHandler = (e) => {
        const files = Array.from(e.target.files);
        Promise.all(files.map(file => {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onload = (e) => {
                    resolve(e.target.result);
                };
                reader.onerror = reader.onabort = reject;
                reader.readAsDataURL(file);
            });
        })).then(images => {
            setImages(prevImages => [...prevImages, ...images]);
        });
    };
    const removeImage = (index) => {
        setImages(prevImages => prevImages.filter((_, i) => i !== index));
    };

    const [tags, setTags] = useState([]);
    const handleInputChange = (e) => {
        const value = e.target.value.trim();
        if (value.includes(',')) {
            const newTags = value.split(',').map(tag => tag.trim()).filter(tag => tag !== '');
            setTags(prevTags => [...prevTags, ...newTags]);
            e.target.value = ''; // Clear input field
        }
    };
    const removeTag = (index) => {
        setTags(prevTags => prevTags.filter((_, i) => i !== index));
    };
    
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
            <p>Images</p>
            <div className="image-preview-container">
                {images.map((imageDataUrl, index) => (
                    <div key={index} className="image-preview">
                        <img src={imageDataUrl} alt={`Product ${index + 1}`} />
                        <button className="image-preview-remove" onClick={() => removeImage(index)}>X</button>
                    </div>
                ))}
                <label className="image-preview placeholder" htmlFor="file-input">
                    <img src={upload_placeholder} alt="Upload" />
                    <input onChange={imageHandler} type="file" name="image" id="file-input" multiple hidden />
                </label>
            </div>
        </div>
        <div className="products-add-description">
            <p>Description</p>
            <textarea name="description" placeholder="Required"></textarea>
        </div>
        <div className="products-add-tags field-row">
                <p>Tags</p>
                <div className="tags-container">
                    {tags.map((tag, index) => (
                        <div key={index} className="tag">
                            {tag}
                            <button className="tag-remove" onClick={() => removeTag(index)}>X</button>
                        </div>
                    ))}
                </div>
                <input
                    type="text"
                    name="tags"
                    placeholder="Separate with commas"
                    onChange={handleInputChange}
                />
            </div>
        <button className="products-add-button">Add Product</button>
    </div>
  )
}
