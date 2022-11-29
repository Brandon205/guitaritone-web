import React from 'react';
import PitchDetection from '../components/PitchDetection.jsx';

export default function App() {

  return (
    <div className="flex justify-center items-center flex-col bg-neutral-800 h-screen gap-16">
      <h1 className='text-white text-2xl'>Hello World</h1>
      <PitchDetection />
    </div>
  )
}
