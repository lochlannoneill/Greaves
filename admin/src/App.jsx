import React from 'react'
import { Navbar } from './Components/Navbar/Navbar'
import { Admin } from './Pages/Admin/Admin'

export const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Admin />
    </div>
  )
}
