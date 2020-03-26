import React from 'react'
import { Link } from 'react-router-dom'

function ScaleList(props) {

  //local styles
  const scaleButtonContainerStyle = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    justifyItems: 'center',
    margin: '5px',
  }
  const scaleButtonStyle = {
    display: 'grid',
    alignItems: 'center',
    overflow: 'hidden',
    height: '115px',
    width: '10vw',
    minWidth: '110px',
    margin: '5px auto',
    padding: '5px',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 'clamp(18px, 1.25vw, 50px)',
    backgroundImage: 'linear-gradient(#CDC0BF, #696261)',
    border: '1px solid black',
    textShadow: '1px 1px white, 1px -1px white, -1px 1px white, -1px -1px white'
  }

  return (
    <div className = 'rightMenu'>
      <h1>Select a Scale Type</h1>
      <div style = {scaleButtonContainerStyle}>
        <Link style = {scaleButtonStyle} to="/scales/ionian">Major / Ionian</Link>
        <Link style = {scaleButtonStyle} to="/scales/aeolian">Natural Minor / Aeolian</Link>
        <Link style = {scaleButtonStyle} to="/scales/harmonic">Harmonic Minor</Link>
        <Link style = {scaleButtonStyle} to="/scales/melodic">Melodic Minor</Link>
        <Link style = {scaleButtonStyle} to="/scales/pentatonic-minor">Pentatonic Minor</Link>
        <Link style = {scaleButtonStyle} to="/scales/blues">Blues Scale</Link>
        <Link style = {scaleButtonStyle} to="/scales/pentatonic-major">Pentatonic Major</Link>
        <Link style = {scaleButtonStyle} to="/scales/bebop">Bebop Scale</Link>
      </div>
      <div className='nav'>
      <Link to='/'>Main Menu</Link>
      </div>
    </div>
  );
}

export default ScaleList;
