import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//components
import RootMenu from './components/RootMenu';
import NoteMenu from './components/NoteMenu';

function App() {
  return (
    <div>
    <h1>App Title</h1>
      <div className="App">
        <div>
        <RootMenu/>
        <h2 id='saved'>Saved Info</h2>
        </div>
      <Switch>
      <Route exact path='/' render={()=><NoteMenu />} />
      </Switch>
      </div>
    </div>
  );
}

export default App;
