import React from 'react'
import { render } from 'react-dom'
import HTML5Backend from 'react-dnd-html5-backend'
import { DndProvider } from 'react-dnd'

import Board from './components/Board'

const App = () => (
  <DndProvider backend={HTML5Backend}>
    <Board />
  </DndProvider>
)

render(<App />, document.getElementById('root'))
