import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className='Navbar'>
        <a href='#' className='name'>Hifazat</a>
        <div className='tabs'>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Resources</a>
            <a href='#'>Contact</a>
        </div>
            <a href='#'>=</a>
        </div>
    </div>
  )
}

export default Navbar