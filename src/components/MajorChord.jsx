import React from 'react';
import { Link } from 'react-router-dom'
import { Chord } from '@tonaljs/tonal';

function MajorChord(props) {
  const chord = Chord.get(props.currentRoot)
  //localStyles

    return (
      <div className = 'rightMenu'>
        <h1>{chord.name} Chords</h1>
        <h2>Notes: {chord.notes[0]} {chord.notes[1]} {chord.notes[2]}</h2>
        <Link to='/'>Main Menu</Link>
        <br></br>
        <Link to='/chords'>Back</Link>
      </div>
    );
}

export default MajorChord;
