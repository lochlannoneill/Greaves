import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { Breadcrumb } from '../Components/Breadcrumbs/Breadcrumb'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'

export const Product = () => {
  const {products} = useContext(ShopContext);
  const {id} = useParams();
  const product = products.find((e)=> e.id === Number(id));

  return (
    <>
      {product ? (
        <>
          <Breadcrumb product={product} />
          <ProductDisplay product={product} />
        </>
      ) : (
        <p>Product not found</p>
      )}
    </>

  )
}
