import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCount] = useState(0)
  const addvalue = ()=>{
    console.log("clicked",counter);
    // counter = counter+1
    setCount(counter+1)
  }
  const removevalue = ()=>{
    if (counter>0) {
      setCount(counter-1)
    }else{
      alert('negative value is not allow!')
    }
  }

  return (
    <>
     <div>
      <h1>Counter Project</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addvalue}>Add value</button><br /><br />
      <button onClick={removevalue}>remove value</button>
      <p>footer:{counter}</p>
     </div>
    </>
  )
}

export default App
