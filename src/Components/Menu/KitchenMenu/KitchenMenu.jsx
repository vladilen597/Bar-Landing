import React from 'react'
import KitchenList from './KitchenList/KitchenList'

import './KitchenMenu.scss'

const KitchenMenu = () => {
  return (
    <div className='kitchen-menu'>
      <h2 className='kitchen-menu__title h2-title'>КУХНЯ</h2>
      <KitchenList className='kitchen-list' />
    </div>
  )
}

export default KitchenMenu
