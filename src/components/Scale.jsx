import React from 'react';
import { Link } from 'react-router-dom';
import { Scale as TonalScale } from '@tonaljs/tonal';

function Scale(props) {
  const scale = TonalScale.get(props.currentRoot + ' ' + props.type);

  //localStyles
  console.log(TonalScale.names());
  return (
    <div className = 'rightMenu'>
    <h1>{scale.name} {scale.aliases[0] ? '(' + scale.aliases[0] + ')' : ''}</h1>
    <h2>Notes: {scale.notes.join('-')}</h2>
      <div className='nav'>
        <Link to='/'>Main Menu</Link>
      </div>
      <div className='nav'>
        <Link to='/scales'>Back</Link>
      </div>
    </div>
  );
}

export default Scale;
