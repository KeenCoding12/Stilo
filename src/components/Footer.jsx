import React from 'react'
import News from './News'
import FooterSec from './FooterSec'

const Footer = () => {
  return (
    <footer className='section'>
      <div className="container">
        <News />
        <FooterSec />
      </div>
    </footer>
  )
}

export default Footer