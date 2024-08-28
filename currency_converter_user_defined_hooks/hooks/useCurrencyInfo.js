import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({}) // initial data is empty json object so we do not run into error if it was null
    // to mount the effect, that is fetch the data for once and then if the currency changes, fetch again;
    // so using useEffect hook
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency])) // setting the res[currency='usd'] equal to data; usd is for example

        .catch((error) => console.log("Fetch was not successfull", error))
    }, [currency])

    return data //returning the data 
}

export default useCurrencyInfo;