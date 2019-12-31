import React from 'react'
import { useDrag } from 'react-dnd'

import cardImages from '../cards/*.png'

const Card = ({ sequence, value, flipped = false, style, onEnd = () => {}, ...props }) => {
  const [{ opacity }, drag] = useDrag({
    item: { id: `${sequence}-${value}`, type: 'card' },
    end: onEnd,
    collect: monitor => ({
      opacity: monitor.isDragging() ? 0.8 : 1
    })
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
        opacity,
        ...style
      }}
      {...props} />
  )
}

export default Card
