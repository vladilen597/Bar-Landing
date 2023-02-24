import React, { useState } from 'react'

import './Afisha.scss'
import '../../../static/styles/font-classes.scss'

const images = [
  require('./images/poster1.png'),
  require('./images/poster2.png'),
  require('./images/poster3.png'),
  require('./images/poster4.png'),
]

const Afisha = () => {
  const [clickedAfisha, setClickedAfisha] = useState('now')

  return (
    <div className='afisha'>
      <div className='afisha__pages'>
        <button
          className={
            'afisha__page-button button ' +
            (clickedAfisha === 'now' ? 'afisha__page-button--active' : '')
          }
          onClick={() => setClickedAfisha('now')}
        >
          БЛИЖАЙШИЕ
        </button>
        <button
          className={
            'afisha__page-button button ' +
            (clickedAfisha === 'close' ? 'afisha__page-button--active' : '')
          }
          onClick={() => setClickedAfisha('close')}
        >
          СКОРО
        </button>
      </div>
      <div className='afisha__content'>
        {images.map((image) => (
          <img key={image} src={image} alt='image' />
        ))}
      </div>
    </div>
  )
}

export default Afisha
