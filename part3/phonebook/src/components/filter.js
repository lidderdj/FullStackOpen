import React from "react"

const Filter = ({ search, handleSearch }) => {
  return (
    <div>
      <h2>Search the book</h2>
      <input name="search" value={search} onChange={handleSearch}></input>
    </div>
  )
}

export default Filter
