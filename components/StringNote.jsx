import React, { useState, useEffect, useRef } from 'react';
import { stringNoteKey } from '../utils/key.js';
import { generateString, generateStringNote } from '../utils/utilFunctions.js';
import { motion, AnimatePresence } from "framer-motion";

import { BsFillLockFill, BsFillUnlockFill } from 'react-icons/bs';

export default function StringNote() {
    const [score, setScore] = useState(0);
    const [streak, setStreak] = useState(0);
    const [stringNote, setStringNote] = useState(['E (6th)', 'A']);
    const [difficulty, setDifficulty] = useState('beginner');
    const [animation, setAnimation] = useState(false);
    const [stringLock, setStringLock] = useState('');
    const [noteLock, setNoteLock] = useState('');

    const buttonDiv = useRef(null);

    useEffect(() => {
        setStringNote([generateString(), generateStringNote(difficulty)])
        setNoteLock('')
        setStringLock('')
    }, [difficulty])

    let takeGuess = (fret, e) => {
        e.preventDefault();

        if (fret === stringNoteKey[stringNote[0]][stringNote[1]]) {
            setScore(score + 1)
            setStreak(streak + 1)
            console.log(stringLock, noteLock, stringNote)
            if (stringLock !== '') {
                setStringNote([stringLock, generateStringNote(difficulty)])
            } else if (noteLock !== '') {
                setStringNote([generateString(), noteLock])
            } else {
                setStringNote([generateString(), generateStringNote(difficulty)])
        
            }
            setAnimation(true)
            setTimeout(() => setAnimation(false), 1000)
            buttonDiv.current.childNodes.forEach(node => { // Removes the bg-red class from all of the buttons
                node.style.backgroundColor = '#4b5975';
            })
        } else {
            setStreak(0)
            e.target.style.backgroundColor = '#b81b2c';
        }
    }

    let handleLock = (type) => {
        if (type === 'string') {
            if (stringLock === '') {
                setStringLock(stringNote[0])
            } else {
                setStringLock('')
            }
        } else if (type === 'note') {
            if (noteLock === '') {
                setNoteLock(stringNote[1])
            } else {
                setNoteLock('')
            }
        }
    }

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-25%" },
    };

    return (
        <div className='flex justify-center items-center flex-col gap-16'>
            <h1 className='text-white text-3xl'>Learn the Guitar Fretboard</h1>
            <div className='flex flex-col items-center gap-4'>
                <div className='flex items-center gap-3'>
                    <h2 className='text-white text-3xl inline'>String: <span>{stringNote[0]} </span></h2>
                    {stringLock ? (
                        <BsFillLockFill className='cursor-pointer text-white text-2xl inline' onClick={() => handleLock('string')} />
                    ) : (
                        <BsFillUnlockFill className='cursor-pointer text-white text-2xl inline' onClick={() => handleLock('string')} />
                    )}
                </div>
                <div className='flex items-center gap-3'>
                    <h2 className='text-white text-3xl inline'>Note: <span>{stringNote[1]} </span></h2>
                    {noteLock ? (
                        <BsFillLockFill className='cursor-pointer text-white text-2xl inline' onClick={() => handleLock('note')} />
                    ) : (
                        <BsFillUnlockFill className='cursor-pointer text-white text-2xl inline' onClick={() => handleLock('note')} />
                    )}
                </div>
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

            <div className="flex flex-wrap justify-center gap-2" ref={buttonDiv}>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess(0, e)}>0</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess(1, e)}>1</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess(2, e)}>2</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess(3, e)}>3</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess(4, e)}>4</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess(5, e)}>5</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess(6, e)}>6</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess(7, e)}>7</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess(8, e)}>8</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess(9, e)}>9</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess(10, e)}>10</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess(11, e)}>11</button>
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
