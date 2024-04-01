import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Table } from '../../Components/Table/Table'
import { Products } from '../../Components/Products/Products'
import { Users } from '../../Components/Users/Users'
import { Reviews } from '../../Components/Reviews/Reviews'
import './Admin.css'

export const Admin = () => {
  return (
    <div className="admin">
      <Table />
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/users" element={<Users />} />
        <Route path="/reviews" element={<Reviews />} />
      </Routes>
    </div>
  )
}
