import React from 'react'
import { useDrag } from 'react-dnd'

import cardImages from '../cards/*.png'

const Card = ({ data, flipped = false, style, ...props }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id: data.id, type: 'card', data },
    collect: monitor => ({
      isDragging: !!monitor.isDragging()
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
        backgroundImage: `url(${flipped ? cardImages.back : cardImages[`${data.sequence}${data.value}`]})`,
        opacity: isDragging ? 0 : 1,
        ...style
      }}
      {...props} />
  )
}

export default Card
