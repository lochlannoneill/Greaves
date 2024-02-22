import React from 'react'
import './Popular.css'
import data_product_women from '../Assets/products/product_data_popular_women.js'
import data_product_men from '../Assets/products/product_data_popular_men.js'
import data_product_kids from '../Assets/products/product_data_popular_kids.js'
import { Item } from '../Item/Item'

export const Popular = () => {
  return (
    <div className='popular'>

      <div className="popular-women">
        <h1>Popular in Women</h1>
        <div className="popular-list">
          <div className="popular-item">
            {data_product_women.map((item, index) => {
              return <Item key={index} id={item.id} title={item.title} img={item.image} price={item.price} price_old={item.price_old} />
            })}
          </div>
        </div>
      </div>

      <div className="popular-men">
        <h1>Popular in Men</h1>
        <div className="popular-list">
          <div className="popular-item">
            {data_product_men.map((item, index) => {
              return <Item key={index} id={item.id} title={item.title} img={item.image} price={item.price} price_old={item.price_old} />
            })}
          </div>
        </div>
      </div>

      <div className="popular-men">
        <h1>Popular in Kids</h1>
        <div className="popular-list">
          <div className="popular-item">
            {data_product_kids.map((item, index) => {
              return <Item key={index} id={item.id} title={item.title} img={item.image} price={item.price} price_old={item.price_old} />
            })}
          </div>
        </div>
      </div>

    </div>
  )
}
