import React from 'react';
import {Link} from 'react-router-dom'

function NoteMenu() {
  const noteMenuStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    minHeight: '300px',
    minWidth: '600px',
    marginLeft: '5px'
  }
  const rootNoteStyle = {
    textAlign: 'left',
    padding: '5px',
  }
  const noteButtonsDivStyle = {
    display: 'flex',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyContent: 'space-around',
    border: '1px solid black',
  }
  const noteButtonStyle = {
    padding: '20px',
    height: '10vh',
    width: '10vw',
    margin: '5px',
    fontSize: '20px',
    backgroundImage: 'linear-gradient(#CEC0BE, #696261)',
    border: '1px solid black',
  }

  return (
    <div style = {noteMenuStyle}>
        <h1>Selection Menu</h1>
        <h2 style = {rootNoteStyle}>Root Note (C)</h2>
        <div style = {noteButtonsDivStyle}>
          <Link style = {noteButtonStyle} to="/chords">Chord Types</Link>
          <Link style = {noteButtonStyle} to="/scales">Scales</Link>

        </div>
      </div>
  );
}

export default NoteMenu;
