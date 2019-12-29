import React from 'react'

const DropPile = ({ enabled }) => (
  <div
    style={{
      height: 240,
      width: 144,
      border: `4px dashed ${enabled ? 'red' : 'blue'}`,
      margin: 10
    }}
  />
)

export default DropPile
