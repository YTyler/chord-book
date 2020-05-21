import React from 'react';
import { Link } from 'react-router-dom';

function NoteMenu(props) {

//local styles
  const titleStyle = {
    margin: '8px', //overide user-stylesheet
    marginBottom: '15px',
    paddingLeft: '10px',
    fontSize: '35px'
  }
  const noteButtonContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
  }
  const noteButtonStyle = {
    display: 'grid',
    alignItems: 'center',
    height: '150px',
    width: '18vw',
    minWidth: '195px ',
    margin: '0 auto',
    marginTop: '10px',
    fontSize: 'clamp(25px, 1.75vw, 60px)',
    backgroundImage: 'linear-gradient(#CDC0BF, #696261)',
    border: '1px solid black',
    textShadow: '1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white'
  }

  return (
    <div className = 'rightMenu'>
        <h1 style={titleStyle}>Main Menu</h1>
        <div style = {noteButtonContainerStyle}>
          <Link style = {noteButtonStyle} to = "/chords">View Chord Types</Link>
          <Link style = {noteButtonStyle} to = "/scales">View Scales</Link>
          <Link style = {noteButtonStyle} to = "/intervals">Explore Intervals</Link>
        <Link style={noteButtonStyle} to="/">Saved Lists</Link>
        </div>
      </div>
  );
}

export default NoteMenu;
