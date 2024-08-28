
import { useState, useEffect } from 'react'
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import './App.css'
import {InputBox} from './components'
// import ConceptuseCurrencyInfo from '../hooks/ConceptuseCurrencyInfo'



function App() {
  // states for input box
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isConverted, setIsConverted] = useState(false);
  const [buttonText, setButtonText] = useState(`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`);



  const currencyInfo = useCurrencyInfo(from); // from here in first run is equal to usd so it will return the data of usd in object form and the we can extract the keys from this object


  const options = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to]) // to here is the key to which currency we want to convert then currencyInfo being an object we have currencyInfo[to=key="pkr"]
    setIsConverted(true) // if convert button is clicked, it will show converted otherwise convert
  }

  // Update button text whenever amount, from, or to changes
  useEffect(() => {
    if (isConverted) {
        setButtonText(`Converted ${from.toUpperCase()} to ${to.toUpperCase()}`);
    } else {
        setButtonText(`Convert ${from.toUpperCase()} to ${to.toUpperCase()}`);
        }
    }, [amount, from, to, isConverted]);


  return (
    <>
      {/* <h1 className='bg-black text-white text-4xl py-5'>Currency Convertor</h1>
      <button onClick={() => (currencyData)} className='bg-blue-700 text-white text-xl m-5'>click me</button>
      <InputBox /> */}
      <div 
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
              }}
      >
        <div className="w-full">
          <div 
            className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30"
          >
            <form onSubmit={(e) => {
              e.preventDefault(); 
              convert() // calling the convert function on submit
              }}
            >
              <div className="w-full mb-1">
                <InputBox
                  label={from}
                  amount={amount}
                  currencyOptions={options}
                  onCurrencyChange={(currency) => {setFrom(currency); setIsConverted(false)}}
                  selectCurrency={from}
                  onAmountChange={(amount) => { setAmount(amount); setIsConverted(false)}}
                />
              </div>
              {/* swap button */}
              <div className="relative w-full h-0.5">
                <button 
                  type="button"
                  className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
                  onClick={swap}
                >
                  swap
                </button>
              </div>
              {/* output box */}
              <div className="w-full mt-1 mb-4">
                <InputBox
                  label={to}
                  amount={convertedAmount}
                  currencyOptions={options}
                  selectCurrency={to}
                  onCurrencyChange={(currency) => { setTo(currency); setIsConverted(false)}}
                  amountDisable
                />
              </div>
              {/* showing convert option or converted */}
              <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                {/* {isConverted ? "Converted" : `Convert ${from.toUpperCase()} to ${to.toUpperCase()}`} */}
                {buttonText}
              </button>

            </form>

          </div>
        </div>


      </div>
    </>
  )
}

export default App
