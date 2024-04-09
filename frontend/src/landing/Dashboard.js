import React from 'react'
import Nav from './Nav'
import Djournal from './Djournal'
import Hero from './Hero'
import Footer from './Footer'

export const Dashboard = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Djournal/>
      <Footer/>
    </div>
  )
};