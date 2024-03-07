import React from 'react'
import './Breadcrumb.css'

export const Breadcrumb = (props) => {
    const {product} = props;

  return (
    <div className="breadcrumb">Home&gt;Shop&gt;{product.id}</div>
  )
}
