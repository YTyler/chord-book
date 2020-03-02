import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//components
import RootMenu from './components/RootMenu';
import NoteMenu from './components/NoteMenu';
import ChordList from './components/ChordList';
import ScaleList from './components/ScaleList';
import IntervalMenu from './components/IntervalMenu';

function App() {
  return (
    <div>
    <h1>App Title</h1>
      <div className="App">
        <div>
          <h2 id='saved'>- My Saved Lists -</h2>
        <RootMenu/>
        </div>
      <Switch>
      <Route exact path='/' render={()=><NoteMenu />} />
      <Route exact path='/chords' render={()=><ChordList />} />
      <Route exact path='/scales' render={()=><ScaleList />} />
      <Route exact path='/intervals' render={()=><IntervalMenu />} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
