import React, { useState, useEffect, useRef } from 'react';
import playChord from '../utils/GuitarChords';
import key from '../utils/key.js';
import { arraysEqual, generateNote } from '../utils/utilFunctions';

export default function PitchDetection() {
    const [currentChord, setCurrentChord] = useState([null,null,null,null,null,null,])
    const [score, setScore] = useState(0);
    const [difficulty, setDifficulty] = useState('easy');
    
    const firstUpdate = useRef(0)
    useEffect(() => {
        if (firstUpdate.current < 1) {
            firstUpdate.current = firstUpdate.current + 1
            return;
        }
        setCurrentChord(generateNote(difficulty))
    }, [difficulty])

    useEffect(() => {
        if (firstUpdate.current < 1) {
            firstUpdate.current = firstUpdate.current + 1
            return;
        }
        playChord(currentChord)
    }, [currentChord])

    let takeGuess = (note) => {
        for (let i = 0; i < key[note].length; i++) {
            if (arraysEqual(currentChord, key[note][i])) {
                console.log('Wowzers you did it!')
                setScore(score + 1)
                setCurrentChord(generateNote(difficulty))
                break;
            } else {
                console.log('Nope ', note, currentChord)
            }
        }
        return;
    }

    let content;
    if (difficulty === 'easy') {
        content = (
            <div className="flex flex-wrap justify-center gap-2">
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('A')}>A</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('C')}>C</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('G')}>G</button>
            </div>
        )
    } else if (difficulty === 'medium') {
        content = (
            <div className="flex flex-wrap justify-center gap-2">
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('A')}>A</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('B')}>B</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('C')}>C</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('D')}>D</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('G')}>G</button>
            </div>
        )
    } else if (difficulty === 'hard') {
        content = (
            <div className="flex flex-wrap justify-center gap-2">
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('A')}>A</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('B')}>B</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('C')}>C</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('D')}>D</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('E')}>E</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('F#/Gb')}>F#/Gb</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('G')}>G</button>
            </div>
        )
    } else if (difficulty === 'challenging') {
        content = (
            <div className="flex flex-wrap justify-center gap-2">
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('A')}>A</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('A#/Bb')}>A#/Bb</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('B')}>B</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('C')}>C</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('C#/Db')}>C#/Db</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('D')}>D</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('D#/Eb')}>D#/Eb</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('E')}>E</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('F')}>F</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('F#/Gb')}>F#/Gb</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('G')}>G</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20' onClick={() => takeGuess('G#/Ab')}>G#/Ab</button>
            </div>
        )
    }

    return (
        <div className='flex justify-center items-center flex-col gap-16'>
            <h1 className='text-white text-3xl'>Pitch Detection Test</h1>
            <button onClick={() => playChord(currentChord)} className='p-2 bg-neutral-500 rounded-md text-xl text-white w-16'>Play Note</button>
            <h3 className='text-white text-3xl'>Score: {score}</h3>

            {content}

            <h1 className='text-white text-4xl'>Settings:</h1>
            <select onChange={(e) => setDifficulty(e.target.value) } name='difficulty' id='difficulty'>
                <option value='easy'>Easy (G, A, C)</option>
                <option value='medium'>Medium (G, A, B, C, D)</option>
                <option value='hard'>Hard (G-Scale: G, A, B, C, D, E, F#)</option>
                <option value='challenging'>Difficult (All Notes)</option>
            </select>

        </div>
    )
}
