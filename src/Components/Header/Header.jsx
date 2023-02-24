import React, { useState } from 'react'
import NavBar from './NavBar/NavBar'
import Button from '../Shared/Button/Button'
import Drawer from '@mui/material/Drawer'
import { BiMenu } from 'react-icons/bi'
import { ReactComponent as Logo } from './images/logo.svg'

import './Header.scss'

const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  const openDrawer = () => {
    setIsDrawerOpen(true)
  }

  const closeDrawer = () => {
    setIsDrawerOpen(false)
  }

  return (
    <header className='header'>
      <Logo />
      <NavBar className='navbar' />
      <Button className='button' title='Бронирование' />

      <button onClick={() => openDrawer()} className='header__burger-button'>
        <BiMenu className='header__burger-icon' />
      </button>

      <Drawer
        anchor='right'
        open={isDrawerOpen}
        className='header__drawer'
        onClose={() => closeDrawer()}
        onOpen={() => openDrawer()}
      >
        <NavBar className='navbar' />
        <Button className='button' title='Бронирование' />
      </Drawer>
    </header>
  )
}

export default Header
