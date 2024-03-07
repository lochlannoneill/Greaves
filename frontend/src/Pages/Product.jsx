import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import { Breadcrumb } from '../Components/Breadcrumbs/Breadcrumb'

export const Product = () => {
  const {products} = useContext(ShopContext);
  const {id} = useParams();
  const product = products.find((e)=> e.id === Number(id));

  return (
    <>
    {product ? (
      <Breadcrumb product={product} />
    )}
  </>
  )
}
