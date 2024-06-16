import "./searchbar.scss"

import React, { useState } from 'react'
const types = ["buy", "rent"]
const SearchBar = () => {
  const [query, setquery] = useState({
    type:"buy",
    location:"",
    minPrice:0,
    maxPrice:0
  })

  const switchType = (val) =>{
    setquery((prev) => ({...prev,type:val}))
  }
  
  return (
    <div className='searchBar'>
      <div className='type'>
        {types.map((type) =>(
          <button key={type} onClick={()=>switchType(type)}
          className={query.type === type ? "active" : ""}>
            {type}
          </button>
        ))}
      
      </div>
        {/* <button onClick={() => switchType("buy")}>Buy</button>
        <button onClick={() => switchType("rent")}>Rent</button> */}
      <form>
        <input 
        type='text' 
        name="location" 
        placeholder='City Location'/>
        <input 
        type='number' 
        name="minPrice" 
        min={0} 
        max={1000000} 
        placeholder='Min Price'/>
        <input 
        type='number' 
        name="maxPrice"
         min={0} 
         max={1000000}
         placeholder='Max Price'/>
         <button>
          <img src="./search.png" alt="" />
         </button>
      </form>
    </div>
  )
}

export default SearchBar
