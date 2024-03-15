import React from 'react'
import './Related.css'
import products from '../Assets/products/related'
import { Item } from '../Item/Item'

export const Related = () => {
  return (
    <div className="related">
      <div className="related-items-parent">
        <h2>Related Products</h2>
        <div className="related-items">
            {products.map((item, index) => {
                return <Item key={index} id={item.id} title={item.title} img={item.image} price={item.price} price_old={item.price_old} />
            })}
        </div>
      </div>
    </div>
  )
}
