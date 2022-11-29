import React from 'react';
import PitchDetection from '../components/PitchDetection.jsx';
import ChordDetection from '../components/ChordDetection.jsx';

export default function App() {

  return (
    <div className="flex justify-center items-center flex-col bg-neutral-800 h-screen gap-16">
      <h1 className='text-white text-2xl'>GUITARITONE</h1>
      <ChordDetection />
    </div>
  )
}
