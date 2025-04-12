import React from 'react'
import Header from './components/Header'
import { Hero } from './components/Hero'
import WhyChooseUs from './components/WhyChooseUs'
import PopularProducts from './components/PopularProducts'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import NewsLetter from './components/NewsLetter'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <PopularProducts />
        <Testimonials />
        <Blog />
        <NewsLetter />
      </main>
      <Footer />
    </>
  )
}

export default App