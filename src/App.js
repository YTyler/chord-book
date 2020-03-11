import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//components
import RootMenu from './components/RootMenu';
import NoteMenu from './components/NoteMenu';
import ChordList from './components/ChordList';
import ScaleList from './components/ScaleList';
import IntervalMenu from './components/IntervalMenu';

function App(props) {

    //state hook declarations
    const [currentRoot, setCurrentRoot] = useState('C')
    return (
      <div>
        <h1>App Title</h1>
        <div className="App">
          <div>
            <h2 id='saved'>- My Saved Lists -</h2>
            <RootMenu setCurrentRoot={setCurrentRoot}/>
          </div>
          <Switch>
            //Menu Routes
            <Route exact path='/' render={()=><NoteMenu currentRoot={currentRoot} />} />
            <Route exact path='/chords' render={()=><ChordList currentRoot={currentRoot} />} />
            <Route exact path='/scales' render={()=><ScaleList currentRoot={currentRoot} />} />
            <Route exact path='/intervals' render={()=><IntervalMenu currentRoot={currentRoot} />} />
          </Switch>
        </div>
      </div>
    );
}

export default App;
