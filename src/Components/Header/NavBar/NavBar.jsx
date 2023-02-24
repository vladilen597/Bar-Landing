import React from 'react'

import './NavBar.scss'

const links = [
  {
    link: '/home',
    title: 'Главная',
  },
  {
    link: '/menu',
    title: 'Меню',
  },
  {
    link: '/afisha',
    title: 'Афиша',
  },
  {
    link: '/collaboration',
    title: 'Сотрудничество',
  },
  {
    link: '/gallery',
    title: 'Галерея',
  },
  {
    link: '/news',
    title: 'Новости',
  },
]

const NavBar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar__link-list'>
        {links.map((link) => {
          return (
            <li key={link.link} className='navbar__list-item'>
              <a className='navbar__link' href={link.link}>
                {link.title}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default NavBar
