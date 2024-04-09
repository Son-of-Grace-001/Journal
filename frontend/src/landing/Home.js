import React from 'react'
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Related } from '../components/Related';
import { Review } from '../components/Review';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

export const Home = () => {
  return (
    <div>
      <Header/>
      <Hero/>
      <About/>
      <Related/>
      <Review/>
      <Footer/>
    </div>
  )
}