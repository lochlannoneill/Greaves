import React from 'react'
import { Link } from 'react-router-dom'
import './Sidebar.css'

export const Sidebar = () => {
  return (
    <div className="sidebar">
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                Add Product
            </div>
        </Link>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                Add Product
            </div>
        </Link>
        <Link to={'/addproduct'} style={{textDecoration:"none"}}>
            <div className="sidebar-item">
                Add Product
            </div>
        </Link>
    </div>
  )
}
