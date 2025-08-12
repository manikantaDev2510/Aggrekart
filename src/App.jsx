import React from 'react'
import Materials from './pages/Materials'
import Home from './pages/Home'
import NavBar from './components/NavBar'

export default function App() {
  return (
    <div>
      <NavBar/>
      <Home />
      <Materials/>
    </div>
  )
}