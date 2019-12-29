import React, { useEffect, useState } from 'react'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import DropPile from './DropPile'
import CardStack from './CardStack'

const Board = ({ difficulty = 0 }) => {
  const [ cards, setCards ] = useState([[], [], [], [], [], [], [], [], []])
  const [ piles, setPiles ] = useState([[], [], [], []])

  // initial deal
  useEffect(() => {
    // create shuffled deck
    const deck = 'ABCD'.split('').map(sequence => {
      return [...Array(10)].map((v, value) => {
        return { sequence, value: value + 1 }
      })
    })
      .reduce((a, v) => [...a, ...v], [])
      .sort(() => Math.random() - 0.5)

    // put it into seperate stacks
    const stacks = [[], [], [], [], [], [], [], [], []]
    deck.forEach((v, i) => {
      stacks[i % 8].push(v)
    })
    setCards(stacks)
  }, [difficulty])

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <DropPile enabled={(4 - difficulty) > 0} cards={piles[0]} />
          <DropPile enabled={(4 - difficulty) > 1} cards={piles[1]} />
          <DropPile enabled={(4 - difficulty) > 2} cards={piles[2]} />
          <DropPile enabled={(4 - difficulty) > 3} cards={piles[3]} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <CardStack cards={cards[0]} />
          <CardStack cards={cards[1]} />
          <CardStack cards={cards[2]} />
          <CardStack cards={cards[3]} />
          <CardStack cards={cards[4]} />
          <CardStack cards={cards[5]} />
          <CardStack cards={cards[6]} />
          <CardStack cards={cards[7]} />
        </div>
      </div>
    </DndProvider>
  )
}

export default Board
