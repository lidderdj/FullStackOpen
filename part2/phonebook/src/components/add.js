import React from "react"

const Add = ({addName, newName, handleNewNameChange, newNumber, handleNewNumberChange}) => {
  return (
    <div>
      <h2>Add a number</h2>
      <form onSubmit={addName}>
        <div>
          Name: <input
          value={newName}
          onChange={handleNewNameChange}
          />
        </div>
        <div>
          Number: <input
          value={newNumber}
          onChange={handleNewNumberChange}
          />
        </div>
        <div>
        <button type="submit">Add number</button>
        </div>
      </form>
    </div>
  )
}

export default Add
