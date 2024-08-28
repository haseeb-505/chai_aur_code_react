import React from 'react'

function InputBox({
    // pass the props here or use the destructured one
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",

}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
        {/* left side of the input box */}
        <div className="w-1/2">
            <label className='text-black/40 mb-2 inline-block'>
                {label}
            </label>
            <input 
                className='outline-none w-full'
                type="number"
                placeholder="Amount"
                disabled={amountDisable}
                value={amount}
                onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
            />
        </div>
        {/* right side of the input box */}
        <div className="w-1/2 flex flex-wrap justify-end text-right">
            <p className='text-black/40 mb-2 inline-block'>
                Currency Type
            </p>
            <select 
                className='rounded-lg px-1 bg-gray-100 cursor-pointer outline-none'
                value={selectCurrency}
                disabled={currencyDisable}
                onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
            >
                {currencyOptions.map((currency_option) => (
                    <option value={currency_option} 
                        key={currency_option}
                    >
                        {currency_option}
                    </option>
                ))}

            </select>
        </div>

      
    </div>
  )
}

export default InputBox
