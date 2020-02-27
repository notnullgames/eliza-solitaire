/**
 * This is the card-engine (model only) implemented as a react-hook
 */

import { useEffect, useState } from 'react'

const useElizaSolitaire = (difficulty = 0) => {
  const [ stacks, setStacks ] = useState([[], [], [], [], [], [], [], [], []])
  const [ piles, setPiles ] = useState([...Array(difficulty)].map(() => []))

  // shuffle the cards and put them in the stacks
  const deal = () => {
    // create shuffled deck
    const deck = 'ABCD'.split('').map(sequence => {
      return [...Array(10)].map((v, value) => {
        return { sequence, value: value + 1, id: sequence + value }
      })
    })
      .reduce((a, v) => [...a, ...v], [])
      .sort(() => Math.random() - 0.5)

    // put it into seperate stacks
    const s = [[], [], [], [], [], [], [], [], []]
    deck.forEach((v, i) => {
      const stack = i % 8
      v.location = `stack${stack}`
      s[stack].push(v)
    })
    setStacks(s)
    setPiles([...Array(difficulty)].map(() => []))
  }

  // move cards to location
  const moveCards = (cards = [], location) => {
    if (!Array.isArray(cards)) {
      cards = [cards]
    }
    // all cards must be same value
    if (!cards.every(card => card.value !== cards[0].value)) {
      throw new Error('CARD_MISMATCH')
    }

    const type = location.substring(0, 4) === 'pile' ? 'pile' : 'stack'
    const typeArray = type === 'pile' ? piles : stacks
    const num = location.charAt(location.length - 1)

    if (num > (typeArray.length - 1) || (typeArray[num].length !== 0 && typeArray[num][ typeArray[num].length - 1 ].value !== cards[0].value)) {
      throw new Error('BAD_TARGET')
    }

    const setter = type === 'pile' ? setPiles : setStacks
    const sourceLocation = cards[0].location
    const sourceType = sourceLocation.substring(0, 4) === 'pile' ? 'pile' : 'stack'
    const sourceNum = sourceLocation.charAt(location.length - 1)

    cards.forEach(card => {
      card.location = location
    })
    if (sourceType === type) {
      typeArray[sourceNum] = typeArray[sourceNum].slice(0, cards.length)
    } else {
      const sourceSetter = sourceType === 'pile' ? setPiles : setStacks
      const sourceTypeArray = sourceType === 'pile' ? piles : stacks
      sourceTypeArray[sourceNum] = sourceTypeArray[sourceNum].slice(0, cards.length)
      sourceSetter(sourceTypeArray)
    }
    typeArray[num] = [typeArray[num], ...cards]
    setter(typeArray)
  }

  // initial deal
  useEffect(deal, [difficulty])

  return { stacks, piles, deal, moveCards }
}

export default useElizaSolitaire
