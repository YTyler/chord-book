import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//General Menu Components
import RootMenu from './components/RootMenu';
import NoteMenu from './components/NoteMenu';
import ChordList from './components/ChordList';
import ScaleList from './components/ScaleList';
import IntervalMenu from './components/IntervalMenu';

//Scale Components
import Ionian from './components/Ionian'
import Aeolian from './components/Aeolian'
//Chord Components
import MajorChord from './components/MajorChord';
import MinorChord from './components/MinorChord';

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
            {//Menu Routes
            }
            <Route exact path='/' render={()=><NoteMenu currentRoot={currentRoot} />} />
            <Route exact path='/chords' render={()=><ChordList />} />
            <Route exact path='/scales' render={()=><ScaleList />} />
            <Route exact path='/intervals' render={()=><IntervalMenu currentRoot={currentRoot} />} />
            {//Scale Routes
            }
            <Route exact path="/scales/ionian" render={()=><Ionian currentRoot={currentRoot}/>} />
            <Route exact path="/scales/aeolian" render={()=><Aeolian currentRoot={currentRoot}/>} />
            {
            // <Route exact path="/scales/harmonic" render={''} />
            // <Route exact path="/scales/melodic" render={''} />
            // <Route exact path="/scales/pentatonic-minor" render={''} />
            // <Route exact path="/scales/blues" render={''} />
            // <Route exact path="/scales/pentatonic-major" render={''} />
            // <Route exact path="/scales/bebop" render={''} />
            }

            {//Chord Routes
            }
            <Route exact path="/chords/major" render={()=><MajorChord currentRoot={currentRoot}/>} />
            <Route exact path="/chords/minor" render={()=><MinorChord currentRoot={currentRoot}/>} />
            {
            // <Route exact path="/chords/7ths" render={''} />
            // <Route exact path="/chords/maj7" render={''} />
            // <Route exact path="/chords/maj7" render={''} />
            // <Route exact path="/chords/min7" render={''} />
            // <Route exact path="/chords/dim" render={''} />
            // <Route exact path="/chords/half-dim" render={''} />
            // <Route exact path="/chords/aug" render={''} />
            }
          </Switch>
        </div>
      </div>
    );
}

export default App;
