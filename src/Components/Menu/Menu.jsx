import React from 'react'
import Badge from '../Shared/Badge/Badge'
import KitchenMenu from './KitchenMenu/KitchenMenu'
import Button from '../Shared/Button/Button'

import './Menu.scss'
import '../../static/styles/font-classes.scss'

const Menu = () => {
  return (
    <div className='menu'>
      <Badge className='badge' title='Top "Manhattan" menu' />
      <KitchenMenu />
      <Button className='button' title='Все меню' type='filled' />
    </div>
  )
}

export default Menu
