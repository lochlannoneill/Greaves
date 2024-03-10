import React from 'react'
import { useEffect } from 'react'

export const Favourites = () => {
      
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts or updates
}, []); // Empty dependency array ensures this effect runs only once after mounting

  return (
    <div>Favourites</div>
  )
}

export default Favourites