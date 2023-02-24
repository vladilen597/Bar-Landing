import React from 'react'
import KitchenItem from './KitchenItem/KitchenItem'

import './KitchenList.scss'

const kitchenList = [
  {
    title: 'Amet donec.',
    description:
      'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.',
    size: '100 гр',
    price: '550 р',
    image: require('./images/dish1.png'),
  },
  {
    title: 'Amet donec.',
    description:
      'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.',
    size: '100 гр',
    price: '550 р',
    image: require('./images/dish2.png'),
  },
  {
    title: 'Amet donec.',
    description:
      'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.',
    size: '100 гр',
    price: '550 р',
    image: require('./images/dish3.png'),
  },
  {
    title: 'Amet donec.',
    description:
      'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.',
    size: '100 гр',
    price: '550 р',
    image: require('./images/dish4.png'),
  },
  {
    title: 'Amet donec.',
    description:
      'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.',
    size: '100 гр',
    price: '550 р',
    image: require('./images/dish5.png'),
  },
  {
    title: 'Amet donec.',
    description:
      'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.',
    size: '100 гр',
    price: '550 р',
    image: require('./images/dish6.png'),
  },
  {
    title: 'Amet donec.',
    description:
      'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.',
    size: '100 гр',
    price: '550 р',
    image: require('./images/dish7.png'),
  },
  {
    title: 'Amet donec.',
    description:
      'Placerat id auctor nunc id vel vel curabitur. Urna fames maecenas leo elit diam nibh elit.',
    size: '100 гр',
    price: '550 р',
    image: require('./images/dish8.png'),
  },
]

const KitchenList = () => {
  return (
    <ul className='kitchen-list'>
      {kitchenList.map((kitchenItem) => {
        return (
          <KitchenItem
            image={kitchenItem.image}
            title={kitchenItem.title}
            price={kitchenItem.price}
            size={kitchenItem.size}
            description={kitchenItem.description}
          />
        )
      })}
    </ul>
  )
}

export default KitchenList
