import React, { useState, useEffect } from 'react';

function RootMenu(props) {

  //local styles
  const rootMenuStyle = {
    backgroundColor: 'white',
    border: '2px solid black',
    borderRadius: '10px',
    minHeight: '300px',
    minWidth: '250px',
  }
  const noteListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr',
    margin: '15px',
    fontSize: 'clamp(20px, 1.5vw, 30px)',
  }
  const accidentalListStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    margin: '15px',
    fontSize: 'clamp(20px, 1.5vw, 30px)',
  }

  //state hook declarations
  const [styledRoot, setStyledRoot] = useState(['emptyStyle', 'emptyStyle', 'selected', 'emptyStyle', 'emptyStyle', 'emptyStyle' , 'emptyStyle']);
  const [styledAccidental, setStyledAccidental] = useState(['emptyStyle', 'selected', 'emptyStyle'])
  const [currentLetter, setLetter] = useState('C')
  const [currentAccidental, setAccidental] = useState('')

  //Functions for Selection on Clicks
  const updateRootNote = () => {
    const newRoot = currentLetter + currentAccidental;
    props.setCurrentRoot(newRoot)
    return newRoot;
  }

  function onLetterSelection(val, letter) {
    //page changes
    const newSelected = ['emptyStyle', 'emptyStyle', 'emptyStyle', 'emptyStyle', 'emptyStyle', 'emptyStyle' , 'emptyStyle']
    newSelected[parseInt(val)] = 'selected';
    setStyledRoot(newSelected);
    //data changes
    setLetter(letter);
    props.setIntervalBool(false) //reset interval menu when root note changes
  }

  function onAccidentalSelection(val, accidental) {
    //page changes
    const newSelected = ['emptyStyle', 'emptyStyle', 'emptyStyle']
    newSelected[parseInt(val)] = 'selected';
    setStyledAccidental(newSelected);
    //data changes
    setAccidental(accidental);
    props.setIntervalBool(false) //reset interval menu when root note changes
  }

  useEffect(() => {
    updateRootNote();
  });

  return (
    <div style = {rootMenuStyle}>
      <h1>Select Root Note</h1>
      <div style = {noteListStyle}>
        <h2 className={styledRoot[0]} onClick={() => onLetterSelection(0, 'A')}>A</h2>
        <h2 className={styledRoot[1]} onClick={() => onLetterSelection(1, 'B')}>B</h2>
        <h2 className={styledRoot[2]} onClick={() => onLetterSelection(2, 'C')}>C</h2>
        <h2 className={styledRoot[3]} onClick={() => onLetterSelection(3, 'D')}>D</h2>
        <h2 className={styledRoot[4]} onClick={() => onLetterSelection(4, 'E')}>E</h2>
        <h2 className={styledRoot[5]} onClick={() => onLetterSelection(5, 'F')}>F</h2>
        <h2 className={styledRoot[6]} onClick={() => onLetterSelection(6, 'G')}>G</h2>
        </div>
      <h1>Add an Accidental</h1>
      <div style = {accidentalListStyle}>
        <h2 className={styledAccidental[0]} onClick={() => onAccidentalSelection(0, 'b')}>♭</h2>
        <h2 className={styledAccidental[1]} onClick={() => onAccidentalSelection(1, '')}>♮</h2>
        <h2 className={styledAccidental[2]} onClick={() => onAccidentalSelection(2, '#')}>♯</h2>
        </div>
      <h2>(Flat, Natural, Sharp)</h2>
    </div>
  );
}

export default RootMenu;
