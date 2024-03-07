import React from 'react'
import './Breadcrumb.css'

export const Breadcrumb = (props) => {
    const {product} = props;

  return (
    <div className="breadcrumb">shop&gt;{product.category}&gt;products&gt;{product.id}</div>
  )
}
