import React from 'react'
import Home from './Home'
import Cuisine from './Cuisine'
import Categary from '../components/Categary'
import Search from '../components/Search'

import {BrowserRouter , Routes ,Route} from 'react-router-dom'


function Pages() {
  return (
    <BrowserRouter>
      <Search />
      <Categary/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Pages