import React from 'react'
import { useDrop } from 'react-dnd'

import Card from './Card'

const DropPile = ({ enabled, onDrop, cards }) => {
  const [, drop] = useDrop({
    accept: 'card'
  })
  return (
    <div
      ref={drop}
      style={{
        height: 240,
        width: 144,
        border: `4px dashed ${enabled ? 'red' : 'blue'}`,
        margin: 10
      }}
    >
      {
        cards.map((card, i) => <Card onEnd={onDrop} key={i} {...card} style={{ top: i * 30, zIndex: i }} />)
      }
    </div>
  )
}

export default DropPile
