import React, { useState } from 'react';
import playChord from '../utils/GuitarChords';
import key from '../utils/key.js';
import { arraysEqual, generateNote } from '../utils/utilFunctions';

export default function PitchDetection() {
    const [currentChord, setCurrentChord] = useState([null,0,null,null,null,null,])
    const [score, setScore] = useState(0);

    let takeGuess = (note) => {

        for (let i = 0; i < key[note].length; i++) {
            if (arraysEqual(currentChord, key[note][i])) {
                console.log('Wowzers you did it!')
                setScore(score + 1)
                setCurrentChord(generateNote())
                break;
            }
        }
        return;
    }

  return (
    <div className='flex justify-center items-center flex-col gap-16'>
        <h1 className='text-white text-3xl'>Pitch Detection Test</h1>
        <button onClick={() => playChord(currentChord)} className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16'>Play Note</button>
        <h3 className='text-white text-3xl'>Score: {score}</h3>

        <div className="flex flex-wrap justify-center gap-2">
            <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16' onClick={() => takeGuess('A')}>A</button>
            <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16' onClick={() => takeGuess('A#/Bb')}>A#/Bb</button>
            <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16' onClick={() => takeGuess('B')}>B</button>
            <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16' onClick={() => takeGuess('C')}>C</button>
            <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16' onClick={() => takeGuess('C#/Db')}>C#/Db</button>
            <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16' onClick={() => takeGuess('D')}>D</button>
            <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16' onClick={() => takeGuess('D#/Eb')}>D#/Eb</button>
            <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16' onClick={() => takeGuess('E')}>E</button>
            <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16' onClick={() => takeGuess('F')}>F</button>
            <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16' onClick={() => takeGuess('F#/Gb')}>F#/Gb</button>
            <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16' onClick={() => takeGuess('G')}>G</button>
            <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16' onClick={() => takeGuess('G#/Ab')}>G#/Ab</button>
        </div>

    </div>
  )
}