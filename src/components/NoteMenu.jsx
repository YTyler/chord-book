import React from 'react';
import { Link } from 'react-router-dom';

function NoteMenu(props) {

//local styles
  const noteMenuStyle = {
    backgroundColor: 'white',
    border: '2px solid black',
    borderRadius: '10px',
    padding: '15px',
    minHeight: '300px',
    minWidth: '600px',
    marginLeft: '5px'
  }
  const noteStyle = {
    textAlign: 'left',
    margin: '8px', //overide user-stylesheet
    marginBottom: '30px',
    paddingLeft: '10px',
    fontSize: '45px'
  }
  const noteButtonContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
  }
  const noteButtonStyle = {
    display: 'grid',
    alignItems: 'center',
    height: '100px',
    width: '70%',
    margin: '0 auto',
    fontSize: '150%',
    backgroundImage: 'linear-gradient(#CDC0BF, #696261)',
    border: '1px solid black',
    textShadow: '1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white'
  }

  return (
    <div style = {noteMenuStyle}>
        <h1 style = {noteStyle}>{props.currentRoot}</h1>
        <div style = {noteButtonContainerStyle}>
          <Link style = {noteButtonStyle} to = "/chords">View Chord Types</Link>
          <Link style = {noteButtonStyle} to = "/scales">View Scales</Link>
          <Link style = {noteButtonStyle} to = "/intervals">Explore Intervals</Link>
        </div>
      </div>
  );
}

export default NoteMenu;
