import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { Item } from '../Components/Item/Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

export const ShopCategory = (props) => {
  const {products} = useContext(ShopContext);
  return (
    <div className="shopcategory">
      {/* <img className="shopcategory-banner" src={props.banner} alt="banner"/> */}
      <div className="shopcategory-filter">
        <div className="shopcategory-filter-search">
          <form className="schopcatergory-filter-search-form">
            <div className="shopcategory-filter-search-bar">
              <div className="shopcategory-filter-search-icon">
                <FontAwesomeIcon icon={faSearch} />
              </div>
              <input
                className="shopcategory-filter-search-input"
                type="text"
                placeholder="Search products"
              />
            </div>
            {/* <button type="shopcatergory-filter-search-button">Search</button> */}
          </form>
        </div>
        <div className="shopcategory-filter-button">
          Sort by <FontAwesomeIcon icon={faChevronDown} size="2xs" />
        </div>
      </div>
      <p className="shopcategory-query">Results for '<b>products</b>'</p>
      <div className="shopcategory-products-parent">
        <div className="shopcategory-products">
          {products.map((item,index)=>{
            if (props.category===item.category) {
              return <Item key={index} id={item.id} title={item.title} img={item.image} price={item.price} price_old={item.price_old} />
            }
            else {
              return null;
            }
          })}
        </div>
        <div className="shopcategory-loadmore">
          <p className="shopcategory-loadmore-results">
            Showing <span>1-12</span> of 36 results
          </p>
          <div className="shopcategory-loadmore-button">
            See More
          </div>
        </div>
      </div>
    </div>
  )
}
