import React from 'react'
import Badge from '../../Shared/Badge/Badge'

import './InfoBlock.scss'
import '../../../static/styles/font-classes.scss'
import Button from '../../Shared/Button/Button'

const InfoBlock = ({ badgeTitle, title, description }) => {
  return (
    <article className='info-block'>
      <Badge className='badge' title={badgeTitle} />
      <h2 className='info-block__title h2-title'>{title}</h2>
      <p className='info-block__description'>{description}</p>
      <Button className='button' title='Подробнее' />
    </article>
  )
}

export default InfoBlock
