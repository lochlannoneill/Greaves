// ShopCategory.jsx
import React, { useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { ShopContext } from "../../Context/ShopContext";
import { Filters } from "../../Components/Filters/Filters";
import { ItemList } from "../../Components/ItemList/ItemList";
import "./ShopCategory.css";

export const ShopCategory = (props) => {
  const { products } = useContext(ShopContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="shopcategory">
      <div className="shopcategory-sort">
        <div className="shopcategory-sort-search">
          <form className="schopcatergory-sort-search-form">
            <div className="shopcategory-sort-search-bar">
              <div className="shopcategory-sort-search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input
                className="shopcategory-sort-search-input"
                type="text"
                placeholder="Search products"
              />
            </div>
          </form>
        </div>
        <div className="shopcategory-sort-button">
          Sort by <FontAwesomeIcon icon={faChevronDown} size="2xs" />
        </div>
      </div>
      <p className="shopcategory-query">
        Results for '<b>products</b>'
      </p>
      <ItemList products={products} category={props.category} />
      <div className="shopcategory-showmore">
        <p className="shopcategory-showmore-results">
          Showing <b>1-12</b> of {props.category}.total results
        </p>
        <div className="shopcategory-showmore-button">
          <p>
            Show More <FontAwesomeIcon icon={faChevronDown} size="2xs" />
          </p>
        </div>
      </div>
    </div>
  );
};
