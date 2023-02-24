import React from 'react'

import './Button.scss'
import '../../../static/styles/font-classes.scss'

const Button = ({ title, type }) => {
  return (
    <button className={'button ' + (type === 'filled' ? 'button--filled' : '')}>
      {title}
    </button>
  )
}

export default Button
