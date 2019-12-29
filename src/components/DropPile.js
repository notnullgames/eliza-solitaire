import React from 'react'
import { useDrop } from 'react-dnd'

const DropPile = ({ enabled, accept = [] }) => {
  const [, drop] = useDrop({
    accept
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
    />
  )
}

export default DropPile
