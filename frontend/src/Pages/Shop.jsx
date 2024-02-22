import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Divider } from '../Components/Divider/Divider'
import { Popular } from '../Components/Popular/Popular'

export const Shop = () => {
  return (
    <div>
      <Hero/>
      <Divider/>
      <Popular/>
    </div>
  )
}

export default Shop