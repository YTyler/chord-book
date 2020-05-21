import React, { useState } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';

//General Menu Components
import RootMenu from './components/RootMenu';
import NoteMenu from './components/NoteMenu';
import ChordList from './components/ChordList';
import ScaleList from './components/ScaleList';
import IntervalMenu from './components/IntervalMenu';

//Other Components
import Scale from './components/Scale';
import Chord from './components/Chord';


function App(props) {
    //state hook declarations
    const [currentRoot, setCurrentRoot] = useState('C')
    const [intervalBool, setIntervalBool] = useState(false);

    return (
        <div className="App">
          <div>
            <h2 id='saved'>ChordBook</h2>
            <RootMenu setCurrentRoot={setCurrentRoot} setIntervalBool={setIntervalBool}/>
          </div>
          <Switch>
            {//Menu Routes
            }
            <Route exact path='/' render={()=><NoteMenu currentRoot={currentRoot} />} />
            <Route exact path='/chords' render={()=><ChordList />} />
            <Route exact path='/scales' render={()=><ScaleList />} />
            <Route exact path='/intervals' render={()=><IntervalMenu currentRoot={currentRoot} intervalBool={intervalBool} setIntervalBool={setIntervalBool} />} />
            {//Scale Routes
            }
            <Route exact path="/scales/ionian" render={()=><Scale currentRoot={currentRoot} type={'ionian'}/>} />
            <Route exact path="/scales/aeolian" render={()=><Scale currentRoot={currentRoot} type={'minor'}/>} />
            <Route exact path="/scales/harmonic" render={()=><Scale currentRoot={currentRoot} type={'harmonic minor'}/>} />
            <Route exact path="/scales/melodic" render={()=><Scale currentRoot={currentRoot} type={'melodic minor'}/>} />
            <Route exact path="/scales/pentatonic-minor" render={()=><Scale currentRoot={currentRoot} type={'minor pentatonic'}/>} />
            <Route exact path="/scales/blues" render={()=><Scale currentRoot={currentRoot} type={'blues'}/>} />
            <Route exact path="/scales/pentatonic-major" render={()=><Scale currentRoot={currentRoot} type={'major pentatonic'}/>} />
            <Route exact path="/scales/bebop" render={()=><Scale currentRoot={currentRoot} type={'bebop'}/>} />

            {//Chord Routes
            }
            <Route exact path="/chords/major" render={()=><Chord currentRoot={currentRoot} type={'major'}/>} />
            <Route exact path="/chords/minor" render={()=><Chord currentRoot={currentRoot} type={'m'}/>} />
            <Route exact path="/chords/7ths" render={()=><Chord currentRoot={currentRoot} type={'7'}/>} />
            <Route exact path="/chords/maj7" render={()=><Chord currentRoot={currentRoot} type={'maj7'}/>} />
            <Route exact path="/chords/min7" render={()=><Chord currentRoot={currentRoot} type={'m7'}/>} />
            <Route exact path="/chords/dim" render={()=><Chord currentRoot={currentRoot} type={'dim7'}/>} />
            <Route exact path="/chords/half-dim" render={()=><Chord currentRoot={currentRoot} type={'m7b5'}/>} />
            <Route exact path="/chords/aug" render={()=><Chord currentRoot={currentRoot} type={'aug'}/>} />

          </Switch>
        </div>
    );
}

export default App;
