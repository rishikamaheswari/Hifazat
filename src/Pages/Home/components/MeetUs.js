import React from 'react'

function MeetUs() {
  return (
    <div className='meetUs'>
        <header>Meet Us</header>
        <p>The world's largest social fundraising platform, optimized for your charity in a more easy way</p>
        <br></br>
        <br></br>
        <div className='outerCards'>
            <div className='Himanshu'>
                <div className='teamcard'>
                <div className='teamcardBack'></div>
                <img className='Chucky' src='Chucky.png' />
                </div>
                <header>Himanshu Srivastava</header>
                <p>Co-Founder, Hifazat</p>
            </div>
            <div className='Rishika'>
                <div className='teamcard'>
                <div className='teamcardBack'></div>
                <img className='Rishu' src='Rishu.png' />
                </div>
                <header>Rishika Maheswari</header>
                <p>Co-Founder, Hifazat</p>
            </div>
        </div> 
    </div>
    
  )
}

export default MeetUs