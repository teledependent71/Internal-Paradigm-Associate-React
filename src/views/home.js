import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Internal Paradigm Associate</title>
        <meta property="og:title" content="Internal Paradigm Associate" />
      </Helmet>
    </div>
  )
}

export default Home
