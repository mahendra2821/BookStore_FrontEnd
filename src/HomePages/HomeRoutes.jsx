import React from 'react'
import Home from '../pages/Home'
import FetureBooks from '../pages/FetureBooks'
import PopularBooks from '../pages/PopularBooks'
import Authors from '../pages/Authors'
import NewsLetter from '../pages/NewsLetter'
import SpeacialOffers from '../pages/SpeacialOffers'
import Footer from '../pages/Footer'

function HomeRoutes() {
  return (
    <div>
        <Home/>
        <FetureBooks/>
        <PopularBooks/>
        <Authors/>
       
        <SpeacialOffers/>
        <NewsLetter/>
        <Footer/>
        
    </div>
  )
}

export default HomeRoutes