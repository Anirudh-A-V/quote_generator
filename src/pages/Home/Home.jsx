import React from 'react'
import Quote from "../../components/Quote/Quote";
import Navbar from "../../components/Navbar/Navbar";
import Tags from '../../components/Tags/Tags';
import './Home.css'

function Home() {
  return (
    <div className="App">
      <div className='Navbar-container'>
        <Navbar />
      </div>
      <div className='Quote-container'>
        <Quote />
        <Tags />
      </div>
    </div>
  )
}

export default Home