import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-400 text-black rounded mb-4'>tailwind</h1>
      <Card username="Rutul" btnText="click me!" />
      <Card username="Riya" btnText="visit here!" />
    
    </>
  )
}

export default App
