import React from 'react'
import { useDrop } from 'react-dnd'

import Card from './Card'

const CardStack = ({ cards, onDrop }) => {
  const [, drop] = useDrop({
    accept: 'card'
  })
  return (
    <div ref={drop} style={{ height: '100%', width: 144, margin: 10, position: 'relative' }}>
      {
        cards.length === 0
          ? <div style={{ height: 240, width: 144, border: '4px solid maroon' }} />
          : cards.map((card, i) => <Card onEnd={onDrop} key={i} {...card} style={{ top: i * 30, zIndex: i }} />)
      }
    </div>
  )
}

export default CardStack
