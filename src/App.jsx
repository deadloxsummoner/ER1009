import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar'
import Home from './pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <NavBar></NavBar>
     <Home></Home>
    </>
  )
}

export default App
