import React from 'react'
import { useEffect } from 'react'
import { FavouriteItems } from '../Components/FavouriteItems/FavouriteItems';

export const Favourites = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts or updates
}, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <div className="favourites">
      <FavouriteItems />
    </div>
  )
}

export default Favourites