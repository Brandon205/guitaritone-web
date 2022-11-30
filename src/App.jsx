import React from 'react';
import { HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PitchDetection from '../components/PitchDetection.jsx';
import ChordDetection from '../components/ChordDetection.jsx';
import Intervals from '../components/Intervals.jsx';

import { BsMusicNoteBeamed, BsMusicNote } from "react-icons/bs";
import { RiPinDistanceFill } from "react-icons/ri";

export default function App() {

  return (
    <Router>
      <div className='flex justify-center items-center flex-col bg-neutral-800 h-full gap-16'>
        <h1 className='text-white text-2xl mt-10'>GUITARiTONE</h1>
        <Routes>
          <Route path='/chord' element={<ChordDetection />} />
          <Route path='/intervals' element={<Intervals />} />
          <Route path='/' element={<PitchDetection />} />
        </Routes>

        <nav className="absolute sticky bottom-0 flex justify-around w-screen bg-neutral-900">
          <Link to='/' className="flex-grow hover:bg-neutral-700 flex flex-col items-center p-3">
            <BsMusicNote className='text-white text-2xl' />
            <p className='text-white'>Pitch</p>
          </Link>
          <Link to='/chord' className="flex-grow hover:bg-neutral-700 flex flex-col items-center p-3">
            <BsMusicNoteBeamed className='text-white text-2xl' />
            <p className='text-white'>Chord</p>
          </Link>
          <Link to='/intervals' className="flex-grow hover:bg-neutral-700 flex flex-col items-center p-3">
            <RiPinDistanceFill className='text-white text-2xl' />
            <p className='text-white'>Interval</p>
          </Link>
        </nav>
      </div>
    </Router>
  )
}
