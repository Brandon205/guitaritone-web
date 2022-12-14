import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PitchDetection from '../components/PitchDetection.jsx';
import ChordDetection from '../components/ChordDetection.jsx';
import Intervals from '../components/Intervals.jsx';
import StringNote from '../components/StringNote.jsx';

import { BsMusicNoteBeamed, BsMusicNote } from "react-icons/bs";
import { RiPinDistanceFill } from "react-icons/ri";
import { FaGuitar } from "react-icons/fa";

export default function App() {
  const [nav, setNav] = useState('pitch');

  return (
    <Router>
      <div className='flex justify-center items-center flex-col bg-[#1b2028] gap-16 w-screen'>
        <Routes>
          <Route path='/chord' element={<ChordDetection />} />
          <Route path='/intervals' element={<Intervals />} />
          <Route path='/frets' element={<StringNote />} />
          <Route path='/' element={<PitchDetection />} />
        </Routes>

        <nav className="absolute sticky bottom-0 flex justify-around w-screen bg-[#151a21]">
          <Link to='/' style={nav === 'pitch' ? {backgroundColor: '#23a9d5'} : {}} className="flex-grow hover:bg-[#23a9d5] flex flex-col items-center p-3" onClick={() => setNav('pitch')}>
            <BsMusicNote className='text-white text-2xl' />
            <p className='text-white'>Pitch</p>
          </Link>
          <Link to='/chord' style={nav === 'chord' ? {backgroundColor: '#23a9d5'} : {}} className="flex-grow hover:bg-[#23a9d5] flex flex-col items-center p-3" onClick={() => setNav('chord')}>
            <BsMusicNoteBeamed className='text-white text-2xl' />
            <p className='text-white'>Chord</p>
          </Link>
          <Link to='/intervals' style={nav === 'interval' ? {backgroundColor: '#23a9d5'} : {}} className="flex-grow hover:bg-[#23a9d5] flex flex-col items-center p-3" onClick={() => setNav('interval')}>
            <RiPinDistanceFill className='text-white text-2xl' />
            <p className='text-white'>Interval</p>
          </Link>
          <Link to='/frets' style={nav === 'fret' ? {backgroundColor: '#23a9d5'} : {}} className="flex-grow hover:bg-[#23a9d5] flex flex-col items-center p-3" onClick={() => setNav('fret')}>
            <FaGuitar className='text-white text-2xl' />
            <p className='text-white'>Fretboard</p>
          </Link>
        </nav>
      </div>
    </Router>
  )
}
