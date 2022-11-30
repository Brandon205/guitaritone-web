import React, { useState, useEffect } from 'react';
import playChord from '../utils/GuitarChords';
import { generateInterval } from '../utils/utilFunctions';

export default function Intervals() {
    const [currentInterval, setCurrentInterval] = useState([[null,null,null,null,null,null], [null,null,null,null,null,null], 'maj3'])
    const [score, setScore] = useState(0);

    useEffect(() => {
        setCurrentInterval(generateInterval())
    }, [])

    let takeGuess = (interval) => {
        if (interval === currentInterval[2]) {
            setScore(score + 1)
            setCurrentInterval(generateInterval())
        } else {
            console.log("Nope, ", interval, currentInterval[2])
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

            <div className="flex flex-wrap justify-center gap-2">
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('maj3')}>Major 3rd</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('p5')}>Perfect 5th</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('octave')}>Octave</button>
            </div>
        </div>
    )
}
