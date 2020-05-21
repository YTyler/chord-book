import React from 'react';
import { Link } from 'react-router-dom'
import { Chord as TonalChord } from '@tonaljs/tonal';
import aMajor from '../images/aMajor.png'
import bMajor from '../images/bMajor.png'
import cMajor from '../images/cMajor.png'
import cMajor2 from '../images/cMajor2.png'
import dMajor from '../images/dMajor.png'
import eMajor from '../images/eMajor.png'
import fMajor from '../images/fMajor.png'
import gMajor from '../images/gMajor.png'

const tempData = {
  "A": [
    {
      "name": "major",
      "imgURL": aMajor
    },
  ],
  "B": [
    {
      "name": "major",
      "imgURL": bMajor
    }
  ],
  "C": [
    {
      "name": "major",
      "imgURL": cMajor,
      "imgURL2": cMajor2
    }
  ],
  "D": [
    {
      "name": "major",
      "imgURL": dMajor
    }
  ],
  "E": [
    {
      "name": "major",
      "imgURL": eMajor
    }
  ],
  "F": [
    {
      "name": "major",
      "imgURL": fMajor
    }
  ],
  "G": [
    {
      "name": "major",
      "imgURL": gMajor
    }
  ],
}

function getChords(props) {
  switch(props.currentRoot) {
    case 'A':
      return <div><img className='chordIMG' src={tempData.A[0].imgURL} alt='aChord' /></div>
    case 'B':
      return <div><img className='chordIMG' src={tempData.B[0].imgURL} alt='aChord' /></div>
    case 'C':
      return (
      <div>
        <img className='chordIMG' src={tempData.C[0].imgURL} alt='aChord' />
        <img className='chordIMG' src={tempData.C[0].imgURL2} alt='aChord' />
      </div>
      )
    case 'D':
      return <div><img className='chordIMG' src={tempData.D[0].imgURL} alt='aChord' /></div>
    case 'E':
      return <div><img className='chordIMG' src={tempData.E[0].imgURL} alt='aChord' /></div>
    case 'F':
      return <div><img className='chordIMG' src={tempData.F[0].imgURL} alt='aChord' /></div>
    case 'G':
      return <div><img className='chordIMG' src={tempData.G[0].imgURL} alt='aChord' /></div>
    default:
      return null
  }
}


function Chord(props) {
  const chord = TonalChord.get(props.currentRoot + props.type)

    return (
      <div className = 'rightMenu'>
        <h1>{chord.name} chords</h1>
        <h2>Notes: {chord.notes.join('-')}</h2>
        {getChords(props)}
        <div className='nav'>
          <Link to='/'>Main Menu</Link>
        </div>
        <div className='nav'>
          <Link to='/chords'>Back</Link>
        </div>
      </div>
    );
}

export default Chord;
