import React, { useState, useEffect } from 'react'
import playChord from '../utils/GuitarChords';
import { arraysEqual, generateChord } from '../utils/utilFunctions';

export default function GuitarChord() {
    const [currentChord, setCurrentChord] = useState([null,null,null,null,null,null]);
    const [streak, setStreak] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        setCurrentChord(generateChord())
    }, [])

    let takeGuess = (chordArr) => { // G: [3,2,0,0,3,3]
        if (arraysEqual(chordArr, currentChord)) {
            setScore(score + 1)
            setStreak(streak + 1)
            setCurrentChord(generateChord())
        } else {
            setStreak(0)
        }
    }

    

    return (
        <div className='flex justify-center items-center flex-col gap-16'>
            <h1 className='text-white text-3xl'>Open Chord Test</h1>

            <button onClick={() => playChord(currentChord)} className='p-2 bg-neutral-500 rounded-md text-xl text-white w-32'>Play Chord</button>
            <h3 className='text-white text-3xl'>Score: {score}</h3>
            <h3 className='text-white text-3xl'>Streak: {streak}</h3>

            <div className="flex flex-wrap justify-center gap-2">
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess([null,0,2,2,2,0])}>A</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess([null,0,2,2,1,0])}>Amin</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess([null,3,2,0,1,0])}>C</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess([null,null,0,2,3,2])}>D</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess([null,0,0,2,3,1])}>Dmin</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess([0,2,2,1,0,0])}>E</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess([0,2,2,0,0,0])}>Emin</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess([3,2,0,0,0,1])}>G</button>
            </div>

            <h1 className='text-white text-4xl'>How to use:</h1>
            <ul className='p-2 text-white'>
                <li className='mb-3'>1. Hit the "Play Note" button to hear a chord.</li>
                <li className='mb-3'>2. From there try your best, either by humming the chord or by trying to play it on your guitar.</li>
                <li className='mb-3'>3. Once you think you have it go ahead and take a guess.</li>
            </ul>
        </div>
    )
}