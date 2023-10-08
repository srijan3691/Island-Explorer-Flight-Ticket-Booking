import React from 'react'
import {Routes} from "react-router-dom"
import { Route } from 'react-router-dom/dist'
import Home from './components/pages/Home'
import Navbar from './components/common/Navbar'
const App = () => {
  return (
    <div className='w-full h-screen overflow-x-hidden'>
    <Navbar/>
      <Routes>
        <Route
          path='/'
          element={<Home></Home>}
        />
      </Routes>
    </div>
  )
}

export default App