import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//components
import RootMenu from './components/RootMenu';
import NoteMenu from './components/NoteMenu';

function App() {
  return (
    <div className="App">
    <RootMenu/>
    <Route exact path='/' render={()=><NoteMenu />} />
    </div>
  );
}

export default App;
