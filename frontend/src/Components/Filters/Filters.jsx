import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import "./Filters.css";

export const Filters = () => {
  const [price, setPrice] = useState(50);
  const [selectedReduced, setSelectedReduced] = useState("no");
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedColor, setSelectedColor] = useState(null);
  const [collapsed, setCollapsed] = useState(true);

  const handleReducedChange = (event) => {
    setSelectedReduced(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleTagChange = (event) => {
    const tag = event.target.value;
    if (selectedTags.includes(tag)) {
      setSelectedTags(
        selectedTags.filter((selectedTag) => selectedTag !== tag)
      );
    } else {
      setSelectedTags([...selectedTags, tag]);
    }
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="filters">
      <div className="filters-container">
        {!collapsed && (
          <form className="filters-form">
            <div className="filters-form-reduced">
              <p>Currently under development</p>
              <label className="filters-form-reduced-label">Reduced</label>
              <div className="filters-form-reduced-options">
                <label htmlFor="reduced-yes">
                  <input
                    type="radio"
                    id="reduced-yes"
                    name="reduced"
                    value="yes"
                    checked={selectedReduced === "yes"}
                    onChange={handleReducedChange}
                  />
                  Yes
                </label>
                <label htmlFor="reduced-no">
                  <input
                    type="radio"
                    id="reduced-no"
                    name="reduced"
                    value="no"
                    checked={selectedReduced === "no"}
                    onChange={handleReducedChange}
                  />
                  No
                </label>
              </div>
            </div>
            <div className="filters-form-price">
              <label htmlFor="price" className="filters-form-price-label">
                Price
              </label>
              <div className="filters-form-price-value">
                <output htmlFor="price" className="filters-form-value-output">
                  {price}
                </output>
                <input
                  className="filters-form-price-value-input"
                  type="range"
                  id="price"
                  name="price"
                  min="0"
                  max="100"
                  value={price}
                  onChange={handlePriceChange}
                />
              </div>
            </div>
            <div className="filters-form-tags">
              <label className="filters-form-tags-label">Tags</label>
              <div className="filters-form-tags-options">
                <label className="filters-form-tags-options-label" htmlFor="popular">
                  <input
                    type="checkbox"
                    id="popular"
                    name="tag"
                    value="popular"
                    checked={selectedTags.includes("popular")}
                    onChange={handleTagChange}
                  />
                  Popular
                </label>
                <label className="filters-form-tags-options-label" htmlFor="new">
                  <input
                    type="checkbox"
                    id="new"
                    name="tag"
                    value="new"
                    checked={selectedTags.includes("new")}
                    onChange={handleTagChange}
                  />
                  New
                </label>
                <label className="filters-form-tags-options-label" htmlFor="elegant">
                  <input
                    type="checkbox"
                    id="elegant"
                    name="tag"
                    value="elegant"
                    checked={selectedTags.includes("elegant")}
                    onChange={handleTagChange}
                  />
                  Elegant
                </label>
                <label className="filters-form-tags-options-label" htmlFor="cool">
                  <input
                    type="checkbox"
                    id="cool"
                    name="tag"
                    value="cool"
                    checked={selectedTags.includes("cool")}
                    onChange={handleTagChange}
                  />
                  Cool
                </label>
                <label className="filters-form-tags-options-label" htmlFor="warm">
                  <input
                    type="checkbox"
                    id="warm"
                    name="tag"
                    value="warm"
                    checked={selectedTags.includes("warm")}
                    onChange={handleTagChange}
                  />
                  Warm
                </label>
              </div>
            </div>
            <div className="filters-form-colors">
              <label className="filters-form-colors-label">Colors</label>
              <div className="filters-form-colors-options">
                <label className="filters-form-colors-options-label" htmlFor="red">
                  <input
                    type="radio"
                    id="red"
                    name="color"
                    value="red"
                    checked={selectedColor === "red"}
                    onChange={handleColorChange}
                  />
                  Red
                </label>
                <label className="filters-form-colors-options-label" htmlFor="blue">
                  <input
                    type="radio"
                    id="blue"
                    name="color"
                    value="blue"
                    checked={selectedColor === "blue"}
                    onChange={handleColorChange}
                  />
                  Blue
                </label>
                <label className="filters-form-colors-options-label" htmlFor="orange">
                  <input
                    type="radio"
                    id="orange"
                    name="color"
                    value="orange"
                    checked={selectedColor === "orange"}
                    onChange={handleColorChange}
                  />
                  Orange
                </label>
                <label className="filters-form-colors-options-label" htmlFor="grey">
                  <input
                    type="radio"
                    id="grey"
                    name="color"
                    value="grey"
                    checked={selectedColor === "grey"}
                    onChange={handleColorChange}
                  />
                  Grey
                </label>
                <label className="filters-form-colors-options-label" htmlFor="black">
                  <input
                    type="radio"
                    id="black"
                    name="color"
                    value="black"
                    checked={selectedColor === "black"}
                    onChange={handleColorChange}
                  />
                  Black
                </label>
              </div>
            </div>
          </form>
        )}
        <button className="toggle-button" onClick={toggleCollapse}>
          {collapsed ? "Show Filters" : "Hide Filters"} <FontAwesomeIcon icon={faFilter} />
        </button>
      </div>
    </div>
  );
};
