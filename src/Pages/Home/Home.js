import React from 'react'
import Navbar from "../../components/Navbar"
import Cards from "./components/Cards"

function Header() {
  return (
    <div className='headerContainer'>
        <header>Great futures are built <br/> with a small charity</header>
        <p>The world's largest social fundraising platform, <br/> optimized for your charity in a more easy way</p>
        <div className='buttonContainer'>
            <button className='donate'>Donate Now</button>
            <button className='watchVideo'>Watch Video</button>
        </div>
    </div>
  )
}

function Home() {
  return (
    <div>
        <Navbar />
        <Header />
        <Cards />
    </div>
  )
}

export default Home