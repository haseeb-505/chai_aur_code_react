import { useCallback, useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [password, setPassword] = useState("");
  const [length, setLength] = useState(8);
  const [includeNumbers, setIncludeNumbers] = useState(false);
  const [includeCharacters, setIncludeCharacters] = useState(false);
  const passwordRef = useRef(null);


  // becuase we want to re-render or re-run our password generator function on following conditions:
  // length change, number checkbox, character checkbox value,
  // we use a callback function to pass the dependencies array
  // moreover,it will also memoize my password and keep it in cache 
  // so that when we rerender the page, it will use some part of previous value if useable
  const generate_password = useCallback(() =>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (includeNumbers) {
      str += "0123456789";
    }
    if (includeCharacters) {
      str += "`~!@#$%^&*(){}[]";
    }

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, includeNumbers, includeCharacters])

  // function to copy password to clip
  const copyPasswordToClip = () => {
    // how many characters you want to select is n
    const n =5;
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,n)
    alert(`We are selecting first ${n} characters as per the logic in the base code.\n\nWant to copy more? Change the logic in the code!`)
    // to access the password value and writing it to the clipboard
    window.navigator.clipboard.writeText(password)
  }

  useEffect(() =>{
    generate_password();
  }, [length, includeNumbers, includeCharacters])

  return (
    <>
      <div className='w-full max-w-xl mx-auto shadow-md rounded-lg px-8 py-6
     my-8 text-orange-500 bg-gray-800 mt-40'>
        <h1
          className="bg-green-600 p-4 text-4xl text-white"
          style={{ fontFamily: 'Times New Roman, serif' }}
        >
          Password Generator
        </h1>
        {/* Password generator box */}
        {/* upper half */}
        <div className="flex flex-auto shadow rounded-lg gap-2 overflow-hidden mt-4 p-3 bg-gray-400 ">
          <input type="text" value={password} 
            className='outline-none w-full py-1 px-2 rounded-md text-black' 
            placeholder='password'
            ref={passwordRef}
          />
          {/* do not need the following button password is automatically being generated on the very 
          first render by useEffect hook */}
          {/* <button 
            className='bg-gray-600 px-2 py-2 rounded-lg text-white mx-1'
            onClick={generate_password}
          >
            Generate
          </button> */}
          <button 
            className='bg-blue-600 px-2 py-2 text-white mx-1 rounded-lg'
            onClick={copyPasswordToClip}
          >
            Copy
          </button>
        </div>
        {/* lower half */}
        <div className="flex flex-auto text-md mt-3 gap-3">
          {/* length slider */}
          <div className="flex items-center gap-x-3">
            <input type="range" name="length" min={6} max={100} value={length} 
                    id="password_length" className='cursor-pointer'
                    onChange={(event) => setLength(event.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          {/* number checkbox */}
          <div className="flex items-center gap-x-2">
            <input type="checkbox" name="numbers_for_password" value={includeCharacters} 
                    id="numebrInput" className='cursor-pointer'
                    onChange={(event) => setIncludeNumbers((prev) => !prev)}
            />
            <label htmlFor="numberInput">numbers {includeNumbers}</label>
          </div>
          {/* characters checkbox */}
          <div className="flex items-center gap-x-2">
            <input type="checkbox" name="numbers_for_password" value={includeCharacters} 
                    id="charcInput" className='cursor-pointer'
                    onChange={(event) => setIncludeCharacters((prev) => !prev)}
            />
            <label htmlFor="charcInput">characters {includeCharacters}</label>
          </div>

        </div>
      </div>

    </>
  )
}

export default App
