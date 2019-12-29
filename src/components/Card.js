import React from 'react'
import { useDrag } from 'react-dnd'

import cardImages from '../cards/*.png'

const Card = ({ sequence, value, flipped = false, style, ...props }) => {
  const [, drag] = useDrag({
    item: { id: `${sequence}-${value}`, type: `card${value}` }
  })

  return (
    <div
      ref={drag}
      className='card'
      style={{
        position: 'absolute',
        display: 'inline-block',
        height: 240,
        width: 144,
        backgroundImage: `url(${flipped ? cardImages.back : cardImages[`${sequence}${value}`]})`,
        ...style
      }}
      {...props} />
  )
}

export default Card
