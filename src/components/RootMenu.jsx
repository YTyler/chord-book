import React from 'react';

function RootMenu() {
  const rootMenuStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    minHeight: '300px',
    minWidth: '250px',
    marginRight: '5px',
  }
  const noteListStyle = {
    display: 'flex',
    justifyContent: 'space-evenly'
  }
  const accidentalListStyle = {
    display: 'flex',
    justifyContent: 'space-evenly'
  }

  return (
    <div style = {rootMenuStyle}>
    <h1>Select Root Note</h1>
    <div style = {noteListStyle}>
      <h2>A</h2>
      <h2>B</h2>
      <h2>C</h2>
      <h2>D</h2>
      <h2>E</h2>
      <h2>F</h2>
      <h2>G</h2>
    </div>
      <div style = {accidentalListStyle}>
      <h2>b</h2>
      <h2>#</h2>
      </div>

      </div>
  );
}

export default RootMenu;
