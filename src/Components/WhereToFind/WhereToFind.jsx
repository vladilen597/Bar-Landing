import React from 'react'
import Badge from '../Shared/Badge/Badge'

import './WhereToFind.scss'
import '../../static/styles/font-classes.scss'

const WhereToFind = () => {
  return (
    <div className='where-to-find'>
      <Badge className='badge' title='Top "Manhattan" place' />
      <h2 className='where-to-find__title h2-title'>контакты</h2>
      <div className='where-to-find__content'>
        <div className='where-to-find__address'>
          <label className='where-to-find__label label3'>Адрес</label>
          <p className='where-to-find__text'>
            Набережная реки Фонтанки, 90 (вход в арке с белыми колоннами)
          </p>
          <label className='where-to-find__label label3'>телефон</label>
          <p className='where-to-find__text'>+7 (812) 713-1945</p>
          <label className='where-to-find__label label3'>Режим работы</label>
          <p className='where-to-find__text'>Ежедневно с 12:00 до 06:00</p>
          <hr className='where-to-find__breakline' />
          <label className='where-to-find__label label3'>директор</label>
          <p className='where-to-find__text'>
            Лидия Эмильевна, +7(921) 963-55-50
          </p>
          <label className='where-to-find__label label3'>арт-директор</label>
          <p className='where-to-find__text'>
            Илиния Ионашко, +7(981) 989-43-30
          </p>
        </div>
        <img
          className='where-to-find__map'
          src={require('./images/map.png')}
          alt='map'
        />
      </div>
    </div>
  )
}

export default WhereToFind
