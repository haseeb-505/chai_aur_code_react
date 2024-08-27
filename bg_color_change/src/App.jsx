import { useRef, useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('black');
  const [textColor, setTextColor] = useState('white');
  const main_heading_ref = useRef(null);

  const chnage_color = (event) => {
    const button_color = event.target.style.backgroundColor
    // updating the full screen background to button_color
    setColor(button_color)

    if (button_color === 'white') {
      setTextColor('black')
    } else {
      setTextColor('white')
    }
  }



  return (
    <div className="min-h-screen w-full flex flex-col m-0" style={{ backgroundColor: color }}>
      <h1 ref={main_heading_ref} className='h1  text-white text-center text-5xl p-4' style={{ color: textColor }}>Background Color Changer</h1>

      {/* color buttons */}
      <div className="fixed justify-center flex flex-wrap gap-9 bg-white bottom-12 inset-x-40 px-2 rounded-full">
        {/* red */}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button onClick={ () => {setColor("red")}} className='outline-none p-4 rounded-full shadow-lg text-white text-2xl' style={{ backgroundColor: "red" }}>Red</button>

          {/* green */}
          {/* instead of writing the very same call bakc function for every button, we extract the button backgroundColor from style and update the setColor in above function */}

          <button  onClick={chnage_color} className='outline-none p-4 rounded-full shadow-lg  text-white text-2xl' style={{ backgroundColor: "green" }}>Green</button>
          {/* blue */}

          <button  onClick={chnage_color} className='outline-none p-4 rounded-full shadow-lg  text-white text-2xl' style={{ backgroundColor: "blue" }}>Blue</button>

          {/* purple */}

          <button  onClick={chnage_color} className='outline-none p-4 rounded-full shadow-lg  text-white text-2xl' style={{ backgroundColor: "purple" }}>Purple</button>

          {/* brown */}

          <button  onClick={chnage_color} className='outline-none p-4 rounded-full shadow-lg  text-white text-2xl' style={{ backgroundColor: "brown" }}>Brown</button>

          {/* yellow */}

          <button  onClick={chnage_color} className='outline-none p-4 rounded-full shadow-lg  text-white text-2xl' style={{ backgroundColor: "cyan" }}>Cyan</button>

          {/* olive */}

          <button  onClick={chnage_color} className='outline-none p-4 rounded-full shadow-lg  text-white text-2xl' style={{ backgroundColor: "olive" }}>Olive</button>

          {/* white */}

          <button  onClick={chnage_color} className='outline-none p-4 rounded-full shadow-lg  text-black text-2xl' style={{ backgroundColor: "white" }}>White</button>
        </div>

      </div>

    </div>
  )
}

export default App
