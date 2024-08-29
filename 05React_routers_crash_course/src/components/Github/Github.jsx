import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //     const fetchData = async () => {
    //             await fetch('https://api.github.com/users/hiteshchoudhary')
    //             .then((res) => res.json())
    //             .then((data) => {
    //                 // console.log(data)
    //                 setData(data)
    //             }) 
    //             .catch((error) => console.log("Github API fetch error: ", error))
    //     }

    //     fetchData();
    // }, [])

    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
        Github Followers: {data.followers}
        <img src={data.avatar_url} alt="Github Avtar" width={300}/>
      
    </div>
  )
}

export default Github

export const githubInfoLoader = async() => {
    const response = await fetch("https://api.github.com/users/hiteshchoudhary")
    return response.json()
}
