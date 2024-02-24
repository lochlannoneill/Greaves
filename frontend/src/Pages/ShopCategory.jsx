import React, { useContext } from 'react'
import './CSS/ShopCategory.css'
import { ShopContext } from '../Context/ShopContext'

export const ShopCategory = (props) => {
  const {all_products} = useContext(ShopContext);
  return (
    <div className="shop-category">
      <img src={props.banner} alt="banner" className="shop-category-banner"/>
    </div>
  )
}

export default ShopCategory