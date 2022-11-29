import React, { useState, useEffect, useRef } from 'react'
import playChord from '../utils/GuitarChords';
import { arraysEqual, generateChord } from '../utils/utilFunctions';

export default function GuitarChord() {
    const [currentChord, setCurrentChord] = useState([null,null,null,null,null,null,]);
    const [score, setScore] = useState(0);

    const firstUpdate = useRef(0)
    useEffect(() => {
        setCurrentChord(generateChord())
    }, [])

    useEffect(() => {
        if (firstUpdate.current < 1) {
            firstUpdate.current = firstUpdate.current + 1
            return;
        }
        playChord(currentChord)
    }, [currentChord])

    let takeGuess = (chordArr) => { // G: [3,2,0,0,3,3]
        if (arraysEqual(chordArr, currentChord)) {
            // correct
            setScore(score + 1)
            setCurrentChord(generateChord())
        } else {
            // incorrect
            console.log('incorrect')
        }
    }

    

    return (
        <div className='flex justify-center items-center flex-col gap-16'>
            <h1 className='text-white text-3xl'>Open Chord Test</h1>

            <button onClick={() => playChord(currentChord)} className='p-2 bg-neutral-500 rounded-md text-xl text-white w-32'>Play Chord</button>
            <h3 className='text-white text-3xl'>Score: {score}</h3>

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
        </div>
    )
}