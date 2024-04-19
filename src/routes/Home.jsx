import React from 'react'
import { Link } from 'react-router-dom'
import Array1Data from "../data/Array_1.json"
import Array2Data from "../data/Array_2.json"



export const Home = () => {



  const handleClick = () => {
    const newData =[]
    const Data = Array1Data.concat(Array2Data)
    newData.push(Data)
    console.log(newData)
    
  }




  return (
    <div className='App'>
      <header className='App-header'>
        <Link  onClick={handleClick} to='list'>დაკლიკე და ჩაირიცხე</Link>
      </header>
    </div>
  )
}
