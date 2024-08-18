import { useCallback, useEffect, useRef, useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "1234567890"
    if (charAllowed) str += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      // console.log(char)
      pass += str.charAt(char)
    }

    setPassword(pass)
  },[length, numberAllowed, charAllowed, setPassword]);
  
  const copyPasswordToClipboard = useCallback(() => {
    // how many characters you want to select is n
    const n =5;
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,n)
    alert(`We are selecting first ${n} characters as per the logic in the base code.\n\nWant to copy more? Change the logic in the code!`)
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() =>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <>
      <h1>Password Generator using useCallback, useRef, etc.</h1>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h2 className='text-white text-center my-3'>Password Generator</h2>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input 
          type="text"
          readOnly
          placeholder='Password'
          value={password}
          ref={passwordRef}
          className="outline-none w-full py-1 px-3"
        />
        <button 
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          onClick={copyPasswordToClipboard}
        >Copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id='numberInput'
            onChange={() => {setNumberAllowed((prev) => !(prev))}}
          />
          <label htmlFor='numberInput'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
            type="checkbox"
            defaultChecked = {numberAllowed}
            id='charInput'
            onChange={() => {setCharAllowed((prev) => !(prev))}}
          />
          <label htmlFor='charInput'>Characters</label>
        </div>

      </div>

      </div>
    </>
  )
}

export default App
