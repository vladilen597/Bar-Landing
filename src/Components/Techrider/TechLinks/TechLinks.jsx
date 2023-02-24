import React from 'react'
import ContactCard from '../../Shared/ContactCard/ContactCard'

import './TechLinks.scss'
import '../../../static/styles/font-classes.scss'

const TechLinks = () => {
  return (
    <div className='tech-links'>
      <h2 className='title2'>Звукорежиссеры клуба МАНХЭТТЕН</h2>
      <div className='tech-links__cards'>
        <ContactCard
          image={require('./images/profile1.png')}
          name='Изотов Константин'
        />
        <ContactCard
          image={require('./images/profile2.png')}
          name='Давид Хозиев'
        />
      </div>
    </div>
  )
}

export default TechLinks
