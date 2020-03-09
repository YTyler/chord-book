import React from 'react';

function IntervalMenu() {
  const intervalMenuStyle = {
    textAlign: 'left',
    border: '2px solid black',
    borderRadius: '10px',
    padding: '15px',
    minHeight: '300px',
    minWidth: '600px',
    marginLeft: '5px'
  }
  return(
    <div style={intervalMenuStyle}>
      <h1>Interval Menu</h1>
      <h2>Root Note: C</h2>
      <select id="interval">
        <option value="1">Unison</option>
        <option value="2">2nd</option>
        <option value="3">3rd</option>
        <option value="4">4th</option>
        <option value="5">5th</option>
        <option value="6">6th</option>
        <option value="7">7th</option>
        <option value="8">Octave</option>
      </select>
    </div>
  )
}

export default IntervalMenu;
