import React from 'react'

function Cards() {
  return (
    <div>
      <div className='outerCards'>
      <div>
        <div className='card'>
        <div className='cardBack'></div>
        Things inside the card
        </div>
        <div className='miniCard'>
        Things inside the minicard
        
        </div>
      </div>
      <div>
        <div className='card'>
        <div className='cardBack'></div>
        Things inside the card
        </div>
      </div>
      <div>
        <div className='card'>
        Things inside the card
        </div>
      </div>
      <div>
        <div className='card'>
        <div className='cardBack cardBackRight'></div>
        Things inside the card
        </div>
      </div>
      <div>
        <div className='card'>
        <div className='cardBack cardBackRight'></div>
        Things inside the card
        </div>
        <div className='miniCard'>
        Things inside the minicard
        </div>
      </div>
    </div>

        <div className='card greencard'>
        <header className='headergreencard'>Fundraising on Hifazat takes just a few minutes</header>
        <div className='factors'>
          <div className='givehappiness factor'>
            <img src='givehappiness.png' height={120}/>
            <header className='title'>Give Happiness</header>
            <p>Giving happiness to others is one of the most fulfilling things you can do in life.</p>
          </div>
          <div className='sharelove factor'>
            <img src='sharelove.png' height={120} />
            <header className='title'>Share Love</header>
            <p>When you share love with those around you, you create a ripple effect of kindness.</p>
          </div>
          <div className='buildsocially factor'>
            <img src='social.png' height={120} />
            <header className='title'>Build Socially</header>
            <p>Building socially requires not just connecting with others, but also actively contributing </p>
          </div>
        </div>

        </div>
    </div>
     

  )
}

export default Cards