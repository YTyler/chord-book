import React from 'react';
import { Link } from 'react-router-dom';
import { Scale as TonalScale } from '@tonaljs/tonal';

function Scale(props) {
  const scale = TonalScale.get(props.currentRoot + ' ' + props.type);

  //localStyles
  console.log(TonalScale.names());
  return (
    <div className = 'rightMenu'>
    <h1>{scale.name} {scale.aliases[0] ? '(aka ' + scale.aliases[0] + ')' : ''}</h1>
    <h2>Notes: {scale.notes.join('-')}</h2>
    <Link to='/'>Main Menu</Link>
    <br></br>
    <Link to='/scales'>Back</Link>
    </div>
  );
}

export default Scale;
