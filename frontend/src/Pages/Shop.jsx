import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Divider } from '../Components/Divider/Divider'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Divider/>
      <Popular/>
      <Offers/>
    </div>
  )
}

export default Shop