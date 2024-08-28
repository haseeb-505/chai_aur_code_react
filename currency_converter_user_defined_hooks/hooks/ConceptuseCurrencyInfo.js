import { useEffect, useState } from "react";


function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    // use a hook that works when data mounts, useEffect
    // useEffect takes a callback function and a dependency array
    // and when dependency array changes, it remounts
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/${currency}.json`)
        .then((res) => res.json()) 
        .then((res) => {
            console.log(`Response of ${currency}`);
            console.log(res[currency]);
            setData(res[currency]);
            
        })
        console.log("Data is:")
        console.log(data)
        //we want to store the json response in some variable and want to update it whenver currency value upadtes.
        // for this response, we use useState hook and pass an empty object so that we do not get into an error even if there is not data fetched.
        .catch((error) => console.log("Error fetching currency data:", error))
    }, [currency])

    console.log(data)

    return data
}

export default ConceptuseCurrencyInfo;