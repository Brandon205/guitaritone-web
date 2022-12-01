import React, { useState, useEffect, useRef } from 'react';
import playChord from '../utils/GuitarChords';
import { key } from '../utils/key.js';
import { arraysEqual, generateNote } from '../utils/utilFunctions';
import { motion, AnimatePresence } from "framer-motion";

export default function PitchDetection() {
    const [currentChord, setCurrentChord] = useState([null,null,null,null,null,null])
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [difficulty, setDifficulty] = useState('easy');
    const [animation, setAnimation] = useState(false);

    const buttonDiv = useRef(null);

    useEffect(() => {
        setCurrentChord(generateNote(difficulty))
    }, [])

    let takeGuess = (note, e) => {
        e.preventDefault();

        for (let i = 0; i < key[note].length; i++) {
            if (arraysEqual(currentChord, key[note][i])) {
                setScore(score + 1)
                setStreak(streak + 1)
                setCurrentChord(generateNote(difficulty))
                setAnimation(true)
                setTimeout(() => setAnimation(false), 1000)
                buttonDiv.current.childNodes.forEach(node => { // Removes the bg-red class from all of the buttons
                    node.classList.remove('bg-red-400')
                })
                break;
            } else {
                setStreak(0)
                e.target.classList.add('bg-red-400');
            }
        }
        return;
    }

    let content;
    if (difficulty === 'easy') {
        content = (
            <div className="flex flex-wrap justify-center gap-2" ref={buttonDiv}>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('C', e)}>C</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('D', e)}>D</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('E', e)}>E</button>
            </div>
        )
    } else if (difficulty === 'medium') {
        content = (
            <div className="flex flex-wrap justify-center gap-2" ref={buttonDiv}>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('C', e)}>C</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('D', e)}>D</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('E', e)}>E</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('F', e)}>F</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('G', e)}>G</button>
            </div>
        )
    } else if (difficulty === 'hard') {
        content = (
            <div className="flex flex-wrap justify-center gap-2" ref={buttonDiv}>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('C', e)}>C</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('D', e)}>D</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('E', e)}>E</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('F', e)}>F</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('G', e)}>G</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('A', e)}>A</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('B', e)}>B</button>
            </div>
        )
    } else if (difficulty === 'challenging') {
        content = (
            <div className="flex flex-wrap justify-center gap-2" ref={buttonDiv}>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('A', e)}>A</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('A#/Bb', e)}>A#/Bb</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('B', e)}>B</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('C', e)}>C</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('C#/Db', e)}>C#/Db</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('D', e)}>D</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('D#/Eb', e)}>D#/Eb</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('E', e)}>E</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('F', e)}>F</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('F#/Gb', e)}>F#/Gb</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('G', e)}>G</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('G#/Ab', e)}>G#/Ab</button>
            </div>
        )
    }

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-25%" },
    };

    return (
        <div className='flex justify-center items-center flex-col gap-16'>
            <h1 className='text-white text-3xl'>Pitch Detection Test</h1>
            <button onClick={() => playChord(currentChord)} className='p-2 bg-neutral-500 rounded-md text-xl text-white w-32 hover:opacity-70'>Play Note</button>
            <div>
                <h3 className='text-white text-3xl inline'>Score: {score} </h3>
                <AnimatePresence initial={false}>
                    <motion.p className='text-green-400 inline mb-10 absolute' variants={variants} initial={{ opacity: 0 }} animate={animation ? "open" : "closed"} exit={{ opacity: 0 }}>+1</motion.p>
                </AnimatePresence>
            </div>
            <div>
                <h3 className='text-white text-3xl inline'>Streak: {streak}</h3>
                <AnimatePresence initial={false}>
                    <motion.p className='text-green-400 inline mb-10 absolute' variants={variants} initial={{ opacity: 0 }} animate={animation ? "open" : "closed"} exit={{ opacity: 0 }}>+1</motion.p>
                </AnimatePresence>
            </div>

            {content}

            <h1 className='text-white text-4xl'>Settings:</h1>
            <select onChange={(e) => setDifficulty(e.target.value) } name='difficulty' id='difficulty' className='p-2'>
                <option value='easy'>Easy (C, D, E)</option>
                <option value='medium'>Medium (C, D, E, F, G)</option>
                <option value='hard'>Hard (C-Scale: C, D, E, F, G, A, B)</option>
                <option value='challenging'>Difficult (Chromatic Scale)</option>
            </select>

            <h1 className='text-white text-4xl'>How to use:</h1>
            <ul className='p-2 text-white'>
                <li className='mb-3'>1. Hit the "Play Note" button to hear a note.</li>
                <li className='mb-3'>2. From there try your best, either by humming the note or by trying to play it on your guitar.</li>
                <li className='mb-3'>3. Once you think you have it go ahead and take a guess.</li>
            </ul>
        </div>
    )
}
