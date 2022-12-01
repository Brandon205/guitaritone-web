import React, { useState, useEffect } from 'react';
import { stringNoteKey } from '../utils/key.js';
import { generateStringNote } from '../utils/utilFunctions';
import { motion, AnimatePresence } from "framer-motion";

export default function StringNote() {
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [stringNote, setStringNote] = useState(['E (6th)', 'A']);
    const [difficulty, setDifficulty] = useState('beginner');
    const [animation, setAnimation] = useState(false);

    useEffect(() => {
        setStringNote(generateStringNote(difficulty))
    }, [difficulty])

    let takeGuess = (fret) => {
        if (fret === stringNoteKey[stringNote[0]][stringNote[1]]) {
            setScore(score + 1)
            setStreak(streak + 1)
            setStringNote(generateStringNote(difficulty))
            setAnimation(true)
            setTimeout(() => setAnimation(false), 1000)
        } else {
            setStreak(0)
        }
    }

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-25%" },
    };

    return (
        <div className='flex justify-center items-center flex-col gap-16'>
            <h1 className='text-white text-3xl'>Learn the Guitar Fretboard</h1>
            <div className='flex flex-col items-center'>
                <h2 className='text-white text-3xl'>String: <span>{stringNote[0]}</span></h2>
                <h2 className='text-white text-3xl'>Note: <span>{stringNote[1]}</span></h2>
            </div>
            <div>
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
            </div>

            <div className="flex flex-wrap justify-center gap-2">
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:bg-neutral-600' onClick={() => takeGuess(0)}>0</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:bg-neutral-600' onClick={() => takeGuess(1)}>1</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:bg-neutral-600' onClick={() => takeGuess(2)}>2</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:bg-neutral-600' onClick={() => takeGuess(3)}>3</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:bg-neutral-600' onClick={() => takeGuess(4)}>4</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:bg-neutral-600' onClick={() => takeGuess(5)}>5</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:bg-neutral-600' onClick={() => takeGuess(6)}>6</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:bg-neutral-600' onClick={() => takeGuess(7)}>7</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:bg-neutral-600' onClick={() => takeGuess(8)}>8</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:bg-neutral-600' onClick={() => takeGuess(9)}>9</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:bg-neutral-600' onClick={() => takeGuess(10)}>10</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:bg-neutral-600' onClick={() => takeGuess(11)}>11</button>
            </div>

            <h1 className='text-white text-4xl'>Settings:</h1>
            <select onChange={(e) => setDifficulty(e.target.value) } name='difficulty' id='difficulty' className='p-2'>
                <option value='beginner'>Beginner (No # or b Notes)</option>
                <option value='intermediate'>Intermediate (All notes)</option>
            </select>

            <h1 className='text-white text-4xl'>How to use:</h1>
            <ul className='p-2 text-white'>
                <li className='mb-3'>1. Select the difficulty you want, the only difference is if you want to practice with Sharp and flat notes and their positions</li>
                <li className='mb-3'>2. Then a random String and Note will be displayed on your screen, on your guitar find what fret that note is on for that string and take a guess.</li>
                <li className='mb-3'>3. If you got it right, your score and streak will increase. If you get it wrong the score won't increase and your streak will be reset to 0.</li>
            </ul>
            
        </div>
    )
}
