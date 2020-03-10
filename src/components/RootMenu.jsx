import React, { useState } from 'react';

function RootMenu() {

  //local styles
  const rootMenuStyle = {
    backgroundColor: 'white',
    border: '2px solid black',
    borderRadius: '10px',
    minHeight: '300px',
    minWidth: '250px',
    marginRight: '5px',
  }
  const noteListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    margin: '15px',
    fontSize: '1.5vw'
  }
  const accidentalListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    margin: '15px',
    fontSize: '1.5vw'
  }

  //state hook declarations
  const [styledRoot, setStyledRoot] = useState(['emptyStyle', 'emptyStyle', 'selected', 'emptyStyle', 'emptyStyle', 'emptyStyle' , 'emptyStyle']);
  const [styledAccidental, setStyledAccidental] = useState(['emptyStyle', 'selected', 'emptyStyle'])

  //Click Functions for Selection
  function selectRoot(val) {
    const newSelected = ['emptyStyle', 'emptyStyle', 'emptyStyle', 'emptyStyle', 'emptyStyle', 'emptyStyle' , 'emptyStyle']
    newSelected[parseInt(val)] = 'selected';
    setStyledRoot(newSelected);
  }
  function selectAccidental(val) {
    const newSelected = ['emptyStyle', 'emptyStyle', 'emptyStyle']
    newSelected[parseInt(val)] = 'selected';
    setStyledAccidental(newSelected);
  }

  return (
    <div style = {rootMenuStyle}>
      <h1>Select Root Note</h1>
      <div style = {noteListStyle}>
        <h2 className={styledRoot[0]} onClick={() => selectRoot(0)}>A</h2>
        <h2 className={styledRoot[1]} onClick={() => selectRoot(1)}>B</h2>
        <h2 className={styledRoot[2]} onClick={() => selectRoot(2)}>C</h2>
        <h2 className={styledRoot[3]} onClick={() => selectRoot(3)}>D</h2>
        <h2 className={styledRoot[4]} onClick={() => selectRoot(4)}>E</h2>
        <h2 className={styledRoot[5]} onClick={() => selectRoot(5)}>F</h2>
        <h2 className={styledRoot[6]} onClick={() => selectRoot(6)}>G</h2>
      </div>
      <h1>Add an Accidental</h1>
      <div style = {accidentalListStyle}>
        <h2 className={styledAccidental[0]} onClick={() => selectAccidental(0)}>♭</h2>
        <h2 className={styledAccidental[1]} onClick={() => selectAccidental(1)}>♮</h2>
        <h2 className={styledAccidental[2]} onClick={() => selectAccidental(2)}>♯</h2>
      </div>
      <h2>(Flat, Natural, Sharp)</h2>
    </div>
  );
}

export default RootMenu;
