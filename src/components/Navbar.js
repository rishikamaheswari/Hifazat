import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <div className='Navbar'>
        <Link href='localhost:3000' className='name'>Hifazat</Link>
        <div className='tabs'>
            <Link href='localhost:3000'>Home</Link>
            <Link href='localhost:3000'>About</Link>
            <Link href='localhost:3000'>Resources</Link>
            <Link href='localhost:3000'>Contact</Link>
        </div>
            <Link href='localhost:3000'>=</Link>
        </div>
    </div>
  )
}

export default Navbar