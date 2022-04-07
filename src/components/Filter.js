import React from 'react'

function Filter({ grease, onHogFilter, sortBy, onSortChange }) {

  function handleChecked(e) {
    onHogFilter(e.target.checked)
  }

  function handleSort(e) {
    onSortChange(e.target.value)
  }

  return (
    <div>
    <div>Show only greased
      <input type="checkbox" checked={grease} onChange={handleChecked}></input>
    </div>
    <div>
      <select value={sortBy} onChange={handleSort}>
        <option value='name'>Name</option>
        <option value='weight'>Weight</option>
      </select>
    </div>
    </div>
  )
}  

export default Filter
