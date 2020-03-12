import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Note } from '@tonaljs/tonal'

const intervalMenuStyle = {
  textAlign: 'left',
}

function IntervalMenu(props) {
  const [interval, setInterval] = useState('P1');
  const [intervalNote, setIntervalNote] = useState(Note.transpose(props.currentRoot, interval));

  const submitInterval = (e) => {
    e.preventDefault();
    setIntervalNote(Note.transpose(props.currentRoot, interval))
    console.log(interval);
  }

  return(
    <div className='rightMenu' style={intervalMenuStyle}>
      <h1>Interval Menu</h1>
      <h2>Root Note: {props.currentRoot}</h2>
      <form onSubmit = {e => submitInterval(e)}>
        <select value={interval} onChange={e => setInterval(e.currentTarget.value)} >
          <option value={'P1'}>Unison</option>
          <option value={'d2'}>2nd - Diminished</option>
          <option value={'m2'}>2nd - Minor</option>
          <option value={'M2'}>2nd - Major</option>
          <option value={'d3'}>3rd - Diminished</option>
          <option value={'m3'}>3rd - Minor</option>
          <option value={'M3'}>3rd - Major</option>
          <option value={'d4'}>4th - Diminished</option>
          <option value={'P4'}>4th - Perfect</option>
          <option value={'A4'}>4th - Augmented</option>
          <option value={'d5'}>5th - Diminished</option>
          <option value={'P5'}>5th - Perfect</option>
          <option value={'A5'}>5th - Augmented</option>
          <option value={'d6'}>6th - Diminished</option>
          <option value={'m6'}>6th - Minor</option>
          <option value={'M6'}>6th - Major</option>
          <option value={'d7'}>7th - Diminished</option>
          <option value={'m7'}>7th - Minor</option>
          <option value={'M7'}>7th - Major</option>
          <option value={'P8'}>Octave</option>
        </select>
        <br></br>
        <button type='submit'>Calculate</button>
      </form>
      <br></br>
      <h2>The interval note up from the root is {intervalNote}</h2>
      <Link to='/'>Main Menu</Link>
    </div>
  )
}

export default IntervalMenu;
