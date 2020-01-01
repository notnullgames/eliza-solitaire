import React from 'react'
import { useDragLayer } from 'react-dnd'

import CardStack from './CardStack'
import useElizaSolitaire from '../useElizaSolitaire'

const Board = ({ difficulty }) => {
  const { stacks, piles, deal, moveCards } = useElizaSolitaire(difficulty)

  const collectedProps = useDragLayer(monitor => {
    console.log({ monitor })
  })
  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardStack cards={piles[0]} enabled={(4 - difficulty) > 0} />
        <CardStack cards={piles[1]} enabled={(4 - difficulty) > 1} />
        <CardStack cards={piles[2]} enabled={(4 - difficulty) > 2} />
        <CardStack cards={piles[3]} enabled={(4 - difficulty) > 3} />
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CardStack cards={stacks[0]} show />
        <CardStack cards={stacks[1]} show />
        <CardStack cards={stacks[2]} show />
        <CardStack cards={stacks[3]} show />
        <CardStack cards={stacks[4]} show />
        <CardStack cards={stacks[5]} show />
        <CardStack cards={stacks[6]} show />
        <CardStack cards={stacks[7]} show />
      </div>
    </div>
  )
}

export default Board
