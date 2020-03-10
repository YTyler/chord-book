import React from 'react'
import { Link } from 'react-router-dom'

function ChordList() {

  const chordListStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    padding: '15px',
    minHeight: '300px',
    minWidth: '600px',
    marginLeft: '5px'
  }

  const chordButtonContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    margin: '5px',
  }

  const chordButtonStyle = {
    display: 'grid',
    alignItems: 'center',
    height: '90px',
    width: '50%',
    margin: '5px auto',
    padding: '5px',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '20px',
    backgroundImage: 'linear-gradient(#CDC0BF, #696261)',
    border: '1px solid black',
    textShadow: '1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white'
  }

  return (
    <div style = {chordListStyle}>
      <h1>Select a Chord Type</h1>
      <div style = {chordButtonContainerStyle}>
        <Link style = {chordButtonStyle} to="/major">Major Triad</Link>
        <Link style = {chordButtonStyle} to="/minor">Minor Triad</Link>
        <Link style = {chordButtonStyle} to="/7ths">Dominant 7ths</Link>
        <Link style = {chordButtonStyle} to="/maj7">Major 7ths</Link>
        <Link style = {chordButtonStyle} to="/min7">Minor 7ths</Link>
        <Link style = {chordButtonStyle} to="/dim">Diminished</Link>
        <Link style = {chordButtonStyle} to="/half-dim">Half Diminished</Link>
        <Link style = {chordButtonStyle} to="/aug">Augmented</Link>
      </div>
      <Link to='/'>Main Menu</Link>
    </div>
  );
}

export default ChordList;
