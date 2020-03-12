import React from 'react';
import { Link } from 'react-router-dom';
import { Scale } from '@tonaljs/tonal';

function Ionian(props) {
  const scale = Scale.get(props.currentRoot + 'ionian');
  const notes = scale.notes;
  //localStyles

    return (
      <div className = 'rightMenu'>
        <h1>{scale.name} Chords</h1>
        <h2>Notes: {notes}</h2>
        <Link to='/'>Main Menu</Link>
        <br></br>
        <Link to='/scales'>Back</Link>
      </div>
    );
}

export default Ionian;
