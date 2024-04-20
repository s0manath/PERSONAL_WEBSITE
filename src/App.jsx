import { useState } from 'react'
import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <Banner/>
      <About/>
    </>
  )
}

export default App
