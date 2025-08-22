import React from 'react'
import './App.css'
// import TopSection from './components/TopSection'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import Category from './components/Category'
import Twodiv from './components/Twodiv'
import BestSelling from './components/BestSelling'
import Threediv from './components/Threediv'
import CustomerReview from './components/CustomerReview'

function App() {

  return (
    <>
      {/* <TopSection /> */}
      <Navbar />
      <HeroSection />
      <Category />
      <Twodiv />
      <BestSelling />
      <Threediv />
      <CustomerReview />
    </>
  )
}

export default App
