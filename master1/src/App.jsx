import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import  Card from './components/Card'

function App() {

  return (
    <>
      <Card user='Rahul' age={21} img=" "/> 
        <Card user='Rohit' age={22} img=" "/>
    </>
  )
}

export default App
