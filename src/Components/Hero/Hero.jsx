import React from 'react'
import Badge from '../Shared/Badge/Badge'
import Afisha from './Afisha/Afisha'

import './Hero.scss'

const Hero = () => {
  return (
    <div className='hero'>
      <div className='hero__afisha'>
        <img
          className='hero__afisha-image'
          src={require('./images/afisha.png')}
          alt='Afisha'
        />
        <div className='hero__description'>
          <Badge title='Since 1996' />
          <h2 className='hero__title h2-title'>TRUE. FONTANKA. UNDERGROUND.</h2>
        </div>
      </div>
      <Afisha />
    </div>
  )
}

export default Hero
