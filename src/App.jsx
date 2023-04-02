import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navber/Navbar'
import Pricelist from './components/Pricelist/Pricelist'
import Dashboard from './components/Dashboard/Dashboard'
import PhoneBar from './components/PhoneBar/PhoneBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold underline text-cyan-200">Hello from</h1>
      <Pricelist></Pricelist>
      <Dashboard></Dashboard>
      <PhoneBar></PhoneBar>
    </div>
  )
}

export default App
