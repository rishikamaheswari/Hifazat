import React from 'react'

function Cards() {
  return (
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
  )
}

export default Cards