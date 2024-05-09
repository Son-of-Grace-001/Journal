import React from 'react'
import { Nav } from '../landing/Nav'
import { Hero } from '../landing/Hero'
import { Contact } from '../landing/Contact'
import { Footer } from '../landing/Footer'
export const Home = () => {
  return (
    <div>
      <Nav/>
      <Hero/>
      <Contact/>
      <Footer/>
    </div>
  )
}
