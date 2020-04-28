import React from "react"

const Filter = ({search, handleSearch}) => {
  return (
    <div>
      <h2>Search for a country</h2>
      <input value={search} onChange={handleSearch}></input>
    </div>
  )
}

export default Filter
