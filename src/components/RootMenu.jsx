import React from 'react'

function RootMenu() {
  const rootMenuStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    minHeight: '300px',
    minWidth: '250px',
    marginRight: '5px'
  }

  return (
    <div style = {rootMenuStyle}>
      <h1>Root Note Menu</h1>
    </div>
  );
}

export default RootMenu;
