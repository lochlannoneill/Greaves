import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { Breadcrumb } from '../Components/Breadcrumbs/Breadcrumb'
import { ProductDisplay } from '../Components/ProductDisplay/ProductDisplay'
import { Reviews } from '../Components/Reviews/Reviews'

export const Product = () => {
  const {products} = useContext(ShopContext);
  const {id} = useParams();
  const product = products.find((e)=> e.id === Number(id));
      
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts or updates
  }, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <>
      {product ? (
        <>
          <Breadcrumb product={product} />
          <ProductDisplay product={product} />
          <Reviews product={product} />
        </>
      ) : (
        <p>Product not found</p>
      )}
    </>

  )
}
