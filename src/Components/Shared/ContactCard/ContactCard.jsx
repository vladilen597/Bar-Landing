import React from 'react'

import { ReactComponent as VkIcon } from './images/vk-icon.svg'
import { ReactComponent as TelegramIcon } from './images/telegram-icon.svg'

import '../../../static/styles/font-classes.scss'
import './ContactCard.scss'

const ContactCard = ({ image, name, vkLink, telegramLink }) => {
  return (
    <div className='contact-card'>
      <img className='contact-card__image' src={image} alt='Contact card' />
      <span className='contact-card__name text1'>{name}</span>
      <div className='contact-card__links'>
        <a className='contact-card__link' href={`https://vk.com/${vkLink}`}>
          <VkIcon />
        </a>
        <a
          className='contact-card__link'
          href={`https://telegram.web/${telegramLink}`}
        >
          <TelegramIcon />
        </a>
      </div>
    </div>
  )
}

export default ContactCard
