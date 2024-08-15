
import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setCounter] = useState(10)

  const increaseCount = () => {
    return setCounter(counter + 1)
  }

  const decreaseCount = () =>{
    if (counter > 0) {
      return setCounter(counter - 1)
    } else{
      alert('Count can\'t be less than 0')
    }
  }

  function addCount(){
    return setCounter(counter + 1)
  }

  return (
    <>
      <h1>React Counter App</h1>
      <div className='counter-button'>
        <button onClick={decreaseCount}>Decrease Count</button>
      </div>

      <div className='counter'>
        <h3>Counter: {counter}</h3>
      </div>

      <div className='counter-button'>
        <button onClick={increaseCount}>Increase Count</button>
      </div>
    </>
  )
}

export default App
