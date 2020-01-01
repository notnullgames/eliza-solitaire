import React from 'react'
import { useDrop } from 'react-dnd'

import Card from './Card'

const CardStack = ({ cards, show, enabled = true }) => {
  const [, drop] = useDrop({
    accept: 'card'
  })
  return (
    <div ref={drop} style={{ position: 'relative', width: 144, margin: 5 }}>
      <div style={{ height: 240, width: 144, border: `4px dashed ${enabled ? '#A22844' : '#38333B'}` }} />
      <div>
        {(cards || []).map((card, c) => <Card data={card} style={{ top: show ? c * 40 : 0 }} key={card.id} />)}
      </div>
    </div>
  )
}

export default CardStack
