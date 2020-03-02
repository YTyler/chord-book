import React from 'react'

function RootMenu() {
  const rootMenuStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    minHeight: '300px',
    minWidth: '250px',
    marginRight: '5px',
  }
  const rootDivStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  }

  return (
    <div style = {rootMenuStyle}>
      <h2>Select Root Note</h2>
      <div style = {rootDivStyle}>
        <h2>A</h2>
        <h2>B</h2>
        <h2>C</h2>
        <h2>D</h2>
        <h2>E</h2>
        <h2>F</h2>
        <h2>G</h2>
        <h2>etc.</h2>
      </div>
    </div>
  );
}

export default RootMenu;
