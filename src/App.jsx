import React from 'react';
import { HashRouter as Router, Routes, Route, Link} from 'react-router-dom';
import PitchDetection from '../components/PitchDetection.jsx';
import ChordDetection from '../components/ChordDetection.jsx';
import Intervals from '../components/Intervals.jsx';
import StringNote from '../components/StringNote.jsx';

import { BsMusicNoteBeamed, BsMusicNote } from "react-icons/bs";
import { RiPinDistanceFill } from "react-icons/ri";
import { FaGuitar } from "react-icons/fa";
import { GiGuitarHead } from "react-icons/gi";

export default function App() {

  return (
    <Router>
      <div className='flex justify-center items-center flex-col bg-[#1b2028] h-full gap-16'>
        <header className='flex justify-start w-full'>
          <h1 className='text-white text-3xl mt-2 ml-5'><GiGuitarHead className='inline text-[#4b5975] text-5xl' /> GuitariTone</h1>
        </header>
        <Routes>
          <Route path='/chord' element={<ChordDetection />} />
          <Route path='/intervals' element={<Intervals />} />
          <Route path='/frets' element={<StringNote />} />
          <Route path='/' element={<PitchDetection />} />
        </Routes>

        <nav className="absolute sticky bottom-0 flex justify-around w-screen bg-[#151a21]">
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
          <Link to='/frets' className="flex-grow hover:bg-neutral-700 flex flex-col items-center p-3">
            <FaGuitar className='text-white text-2xl' />
            <p className='text-white'>Fretboard</p>
          </Link>
        </nav>
      </div>
    </Router>
  )
}
