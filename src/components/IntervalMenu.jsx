import React from 'react';
import { Link } from 'react-router-dom'

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

class IntervalMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {interval: 1};

    this.changeInterval = this.changeInterval.bind(this);
    this.submitInterval = this.submitInterval.bind(this);
  }

  //state functions
  changeInterval(event) {
    this.setState({interval: event.target.value})
  }
  submitInterval(event) {
    alert('Your Choice was ' + this.state.interval)
    event.preventDefault();
  }

  render() {
  return(
    <div style={intervalMenuStyle}>
      <h1>Interval Menu</h1>
      <h2>Root Note: C</h2>
      <form onSubmit = {this.submitInterval}>
        <select value={this.state.value} onChange={this.changeInterval} >
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
}

export default IntervalMenu;
