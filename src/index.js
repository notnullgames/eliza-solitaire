import React from 'react'
import { render } from 'react-dom'

import Board from './components/Board'

const App = () => (
  <Board />
)

render(<App />, document.getElementById('root'))
