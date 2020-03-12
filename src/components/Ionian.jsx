import React from 'react';
import { Link } from 'react-router-dom';
import { Scale } from '@tonaljs/tonal';

function Ionian(props) {
  const scale = Scale.get(props.currentRoot + ' ionian');

  //localStyles

  return (
    <div className = 'rightMenu'>
    <h1>{scale.name}/{scale.aliases[0]}</h1>
    <h2>Notes: {scale.notes.join('-')}</h2>
    <Link to='/'>Main Menu</Link>
    <br></br>
    <Link to='/scales'>Back</Link>
    </div>
  );
}

export default Ionian;
