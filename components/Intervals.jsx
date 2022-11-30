import React, { useState, useEffect } from 'react';
import playChord from '../utils/GuitarChords';
import { generateInterval } from '../utils/utilFunctions';

export default function Intervals() {
    const [currentInterval, setCurrentInterval] = useState([[null,null,null,null,null,null], [null,null,null,null,null,null], 'maj3'])
    const [streak, setStreak] = useState(0);
    const [score, setScore] = useState(0);

    useEffect(() => {
        setCurrentInterval(generateInterval())
    }, [])

    let takeGuess = (interval) => {
        if (interval === currentInterval[2]) {
            setScore(score + 1)
            setStreak(streak + 1)
            setCurrentInterval(generateInterval())
        } else {
            setStreak(0)
        }
    }

    let handlePlay = () => {
        playChord(currentInterval[0])
        setTimeout(() => playChord(currentInterval[1]), 650)
    }

    return (
        <div className='flex justify-center items-center flex-col gap-16'>
            <h1 className='text-white text-3xl'>Interval Training</h1>
            <button onClick={() => handlePlay()} className='p-2 bg-neutral-500 rounded-md text-xl text-white w-32'>Play Interval</button>
            <h3 className='text-white text-3xl'>Score: {score}</h3>
            <h3 className='text-white text-3xl'>Streak: {streak}</h3>

            <div className="flex flex-wrap justify-center gap-2">
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('maj3')}>Major 3rd</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('p5')}>Perfect 5th</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('octave')}>Octave</button>
            </div>

            <h1 className='text-white text-4xl'>How to use:</h1>
            <ul className='p-2 text-white'>
                <li className='mb-3'>1. Hit the "Play Interval" button on your screen to have the 2 notes play.</li>
                <li className='mb-3'>2. These 2 notes are an interval apart, you need to find what that interval is and guess it.</li>
                <li className='mb-3'>3. If you guess correctly both your score and streak will increase, if not then then your streak will be reset and your score will remain the same. Good luck!</li>
            </ul>
        </div>
    )
}
