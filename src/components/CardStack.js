import React from 'react'

import Card from './Card'

const CardStack = ({ cards }) => (
  <div style={{ height: '100%', width: 144, margin: 10, position: 'relative' }}>
    {
      cards.length === 0
        ? <div style={{ height: 240, width: 144, border: '4px solid maroon' }} />
        : cards.map((card, i) => <Card key={i} {...card} style={{ top: i * 30, zIndex: i }} />)
    }
  </div>
)

export default CardStack
