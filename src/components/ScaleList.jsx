import React from 'react'
import { Link } from 'react-router-dom'

function ScaleList() {
  const scaleListStyle = {
    border: '2px solid black',
    borderRadius: '10px',
    minHeight: '300px',
    minWidth: '600px',
    marginLeft: '5px'
  }

  const scaleButtonDivStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    margin: '5px',
  }

  const scaleButtonStyle = {
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    height: '90px',
    width: '100px',
    margin: '5px',
    padding: '5px',
    color: 'black',
    fontWeight: 'bold',
    fontSize: '20px',
    backgroundImage: 'linear-gradient(#CDC0BF, #696261)',
    border: '1px solid black',
    textShadow: '1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white'
  }

  return (
    <div style = {scaleListStyle}>
      <h1>Select a Chord Type</h1>
      <div style = {scaleButtonDivStyle}>
        <Link style = {scaleButtonStyle} to="/ionian">Major / Ionian</Link>
        <Link style = {scaleButtonStyle} to="/aeolian">Natural Minor / Aeolian</Link>
        <Link style = {scaleButtonStyle} to="/harmonic">Harmonic Minor</Link>
        <Link style = {scaleButtonStyle} to="/melodic">Melodic Minor</Link>
        <Link style = {scaleButtonStyle} to="/pentatonic-minor">Pentatonic Minor</Link>
        <Link style = {scaleButtonStyle} to="/blues">Blues Scale</Link>
        <Link style = {scaleButtonStyle} to="/pentatonic-major">Pentatonic Major</Link>
        <Link style = {scaleButtonStyle} to="/bebop">Bebop Scale</Link>
      </div>
      <Link to='/'>Main Menu</Link>
    </div>
  );
}

export default ScaleList;
