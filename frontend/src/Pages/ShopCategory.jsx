import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'
import { Item } from '../Components/Item/Item'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export const ShopCategory = (props) => {
  const {products} = useContext(ShopContext);
  return (
    <div className="shopcategory">
      {/* <img className="shopcategory-banner" src={props.banner} alt="banner"/> */}
      <div className="shopcatergory-sort">
        <div className="shopcategory-sort-button">
          Sort by <FontAwesomeIcon icon={faChevronDown} size="2xs" />
        </div>
      </div>
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

export default ShopCategory