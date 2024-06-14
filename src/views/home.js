import React from 'react'

import { Helmet } from 'react-helmet'

import Navbar4 from '../components/navbar4'
import Hero9 from '../components/hero9'
import Features1 from '../components/features1'
import Contact3 from '../components/contact3'
import Footer1 from '../components/footer1'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Well Worn Extraneous Tapir</title>
        <meta property="og:title" content="Well Worn Extraneous Tapir" />
      </Helmet>
      <Navbar4></Navbar4>
      <Hero9></Hero9>
      <Features1></Features1>
      <Contact3></Contact3>
      <Footer1></Footer1>
    </div>
  )
}

export default Home
