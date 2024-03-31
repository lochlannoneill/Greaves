import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to={'/products'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                Products
            </div>
        </Link>
        <Link to={'/users'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                Users
            </div>
        </Link>
        <Link to={'/reviews'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                Reviews
            </div>
        </Link>
    </div>
  )
}
