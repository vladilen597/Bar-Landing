import React from 'react'
import Badge from '../Shared/Badge/Badge'
import AccordionList from './AccordionList/AccordionList'
import TechLinks from './TechLinks/TechLinks'

import './Techrider.scss'
import '../../static/styles/font-classes.scss'

const Techrider = () => {
  return (
    <div className='techrider'>
      <Badge className='badge' title='Top "Manhattan" party' />
      <h2 className='techrider__title h2-title'>Техрайдер</h2>
      <div className='techrider__content'>
        <AccordionList />
        <TechLinks />
      </div>
    </div>
  )
}

export default Techrider
