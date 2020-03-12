import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { Note } from '@tonaljs/tonal'

const intervalMenuStyle = {
  backgroundColor: 'white',
  textAlign: 'left',
  border: '2px solid black',
  borderRadius: '10px',
  padding: '15px',
  minHeight: '300px',
  minWidth: '600px',
  marginLeft: '5px'
}

function IntervalMenu(props) {
  
  const [interval, setInterval] = useState(1);

  //state functions
  // changeInterval(event) {
  //   this.setState({interval: event.target.value})
  // }
  const submitInterval = () => {
    console.log(interval);
    console.log(props.currentRoot);
  }

  return(
    <div style={intervalMenuStyle}>
      <h1>Interval Menu</h1>
      <h2>Root Note: {props.currentRoot}</h2>
      <form onSubmit = {submitInterval()}>
        <select value={interval} onChange={e => setInterval(e.currentTarget.value)} >
          <option value={1}>Unison</option>
          <option value={2}>2nd</option>
          <option value={3}>3rd</option>
          <option value={4}>4th</option>
          <option value={5}>5th</option>
          <option value={6}>6th</option>
          <option value={7}>7th</option>
          <option value={8}>Octave</option>
        </select>
        <br></br>
        <button type='submit'>Calculate</button>
      </form>
      <br></br>
      <Link to='/'>Main Menu</Link>
    </div>
  )
}

export default IntervalMenu;
