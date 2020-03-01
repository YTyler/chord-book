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
    textAlign: 'right',
    padding: '5px',
  }
  const noteButtonsDivStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    justifyItems: 'center',
  }
  const noteButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    height: '100px',
    width: '100px',
    margin: '5px',
    fontSize: '20px',
    backgroundImage: 'linear-gradient(#CDC0BF, #696261)',
    border: '1px solid black',
    textShadow: '1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white'
  }

  return (
    <div style = {noteMenuStyle}>
        <h1 style = {rootNoteStyle}>Root Note ex.(C)</h1>
        <div style = {noteButtonsDivStyle}>
          <Link style = {noteButtonStyle} to="/chords">View Chord Types</Link>
          <Link style = {noteButtonStyle} to="/scales">View Scales</Link>
          <Link style = {noteButtonStyle} to="/intervals">Explore Intervals</Link>
        </div>
      </div>
  );
}

export default NoteMenu;
