import { useState } from 'react'
import './App.css'
import Card from './compnents/Card'

// import fiasal_mosque2 from "https://images.pexels.com/photos/27698081/pexels-photo-27698081/free-photo-of-faisal-masjid-in-islamabad-pakistan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"

function App() {
  // const [count, setCount] = useState(0)
  let myobj = {
    username: "haseeb",
    age: "23"
  }

  return (
    <>

      <h1 className='bg-green-400 text-black text-xl p-4 rounded-xl mb-5'>Tailwind and Props in React</h1>
      {/* cards */}
      <Card username={myobj.username} textBtn="visit me" />
      <Card username="Delba"  textBtn="View Profile" />


      <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800">
        <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" src="https://images.pexels.com/photos/27698081/pexels-photo-27698081/free-photo-of-faisal-masjid-in-islamabad-pakistan.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" width="384" height="512" />
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
          <blockquote>
            <p className="text-lg font-medium">
              “Tailwind CSS is the only framework that I've seen scale
              on large teams. It’s easy to customize, adapts to any design,
              and the build size is tiny.”
            </p>
          </blockquote>
          <figcaption className="font-medium">
            <div className="text-sky-500 dark:text-sky-400">
              Sarah Dayan
            </div>
            <div className="text-slate-700 dark:text-slate-500">
              Staff Engineer, Algolia
            </div>
          </figcaption>
        </div>
      </figure>

    </>
  )
}

export default App
