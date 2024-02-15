import React from 'react'
import './App.scss'

import Header from '@components/Header/Header.jsx'
import Cards from '@components/Cards/Cards.jsx'
import Cursor from './components/Cursor/Cursor'
import CursorLight from './components/CursorLight/CursorLight'

function App() {

  return (
    <>
      <Header />
      <main>
        <Cursor />
        <CursorLight />
        <Cards />
      </main>
    </>
  )
}

export default App
