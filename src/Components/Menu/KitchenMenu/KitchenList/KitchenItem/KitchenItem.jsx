import React from 'react'

import './KitchenItem.scss'
import '../../../../../static/styles/font-classes.scss'

const KitchenItem = ({ image, title, price, size, description }) => {
  return (
    <li className='kitchen-item'>
      <img className='kitchen-item__image' src={image} alt='Kitchen Dish' />
      <div>
        <div className='kitchen-item__title-line'>
          <span className='title1'>{title}</span>
          <div className='kitchen-item__price label1'>{price}</div>
        </div>
        <span className='kitchen-item__size'>{size}</span>
        <p className='kitchen-item__description'>{description}</p>
      </div>
    </li>
  )
}

export default KitchenItem
