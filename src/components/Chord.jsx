import React from 'react';
import { Link } from 'react-router-dom'
import { Chord as TonalChord } from '@tonaljs/tonal';

function Chord(props) {
  const chord = TonalChord.get(props.currentRoot + props.type)
  //localStyles

    return (
      <div className = 'rightMenu'>
        <h1>{chord.name} chords</h1>
        <h2>Notes: {chord.notes.join('-')}</h2>
        <Link to='/'>Main Menu</Link>
        <br></br>
        <Link to='/chords'>Back</Link>
      </div>
    );
}

export default Chord;
