import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Note } from '@tonaljs/tonal'

function IntervalMenu(props) {
  const [interval, setInterval] = useState('P1');
  const [intervalNote, setIntervalNote] = useState(Note.transpose(props.currentRoot, interval));

  const submitInterval = (e) => {
    e.preventDefault();
    setIntervalNote(Note.transpose(props.currentRoot, interval))
    props.setIntervalBool(true);
  }

  const onSelection = (e) => {
    setInterval(e.currentTarget.value)
    props.setIntervalBool(false);
  }

  //render interval explanation
  function intervalDisplay() {
    if (props.intervalBool) {
      return (`A${intervalAsName(interval)} from ${props.currentRoot} is ${intervalNote}`);
    } else {
      return ('');
    }
  }
  //convert interval value to long name (ex. 'P5 -> Perfect Fifth')
  function intervalAsName(string) {
    const quality = string[0];
    const value = parseInt(string[1]);
    const distances = ['Unison', 'Second', 'Third', 'Fourth', 'Fifth', 'Sixth', 'Seventh', 'Octave']
    let name = '';
    switch(quality) {
      case 'd':
        name += ' Diminished';
        break;
      case 'm':
        name += ' Minor';
        break;
      case 'M':
        name += ' Major';
        break;
      case 'P':
        name += ' Perfect';
        break;
      case 'A':
        name += 'n Augmented';
        break;
      default:
        console.log('Error parsing interval to name (quality)');
    }
    name += ' ' + distances[value-1];
    return name;
  }

  return(
    <div className='rightMenu' >
      <h1>Interval Menu</h1>
      <h2>Root Note: {props.currentRoot}</h2>
      <Link to='/'>Return to Main Menu</Link>
      <div>
        <form onSubmit = {e => submitInterval(e)}>
        <select value={interval} onChange={e => onSelection(e)} >
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
        <div>
        <button type='submit'>Calculate</button>
        </div>
      </form>
      </div>
      <h2>{intervalDisplay()}</h2>
    </div>
  )
}

export default IntervalMenu;
