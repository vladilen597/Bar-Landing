import React from 'react'

import './CafeEvents.scss'
import InfoBlock from './InfoBlock/InfoBlock'

const CafeEvents = () => {
  return (
    <div className='cafe-events'>
      <InfoBlock
        badgeTitle='Top "Manhattan" events'
        title='Банкеты'
        description='Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet. 
Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris. 
Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.'
      />
      <img
        className='cafe-events__image'
        src={require('./images/event-cover.png')}
        alt='event'
      />
      <InfoBlock
        badgeTitle='Top "Manhattan" tourists'
        title='Туристы'
        description='Quam massa pretium et venenatis. Fringilla sagittis, arcu massa, in sem viverra consequat. Tempus sed est interdum eget nisi, nec fames. Eget amet hac varius aliquam. Mattis egestas suspendisse convallis eu arcu et aliquet. 
Porttitor risus sociis vitae nunc id lacus eget felis. Viverra et purus nibh ut. Sed ac leo sit posuere vulputate sed morbi. Donec gravida at turpis sed pulvinar. A nibh non consectetur morbi in arcu, in pellentesque mauris. 
Eu sodales netus faucibus interdum interdum platea massa egestas. Facilisis donec gravida pretium diam semper at id eleifend.'
      />
    </div>
  )
}

export default CafeEvents
