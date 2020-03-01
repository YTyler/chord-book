import React from 'react'

function RootMenu() {
  const rootMenuStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    minHeight: '300px',
    minWidth: '250px',
    marginRight: '5px',
    fontSize: '10px'
  }

  return (
    <div style = {rootMenuStyle}>
      <h1>Select Root Note</h1>
      <select>
        <option value = '1'>A</option>
        <option value = '2'>B</option>
        <option value = '3'>C</option>
        <option value = '4'>D</option>
        <option value = '5'>E</option>
        <option value = '6'>F</option>
        <option value = '7'>G</option>

      </select>
    </div>
  );
}

export default RootMenu;
