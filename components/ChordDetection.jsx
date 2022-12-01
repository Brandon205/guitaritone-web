import React, { useState, useEffect, useRef } from 'react'
import playChord from '../utils/GuitarChords';
import { arraysEqual, generateChord } from '../utils/utilFunctions';
import { motion, AnimatePresence } from "framer-motion";

export default function GuitarChord() {
    const [currentChord, setCurrentChord] = useState([null,null,null,null,null,null]);
    const [streak, setStreak] = useState(0);
    const [score, setScore] = useState(0);
    const [animation, setAnimation] = useState(false);

    const buttonDiv = useRef(null);

    useEffect(() => {
        setCurrentChord(generateChord())
    }, [])

    let takeGuess = (chordArr, e) => { // G: [3,2,0,0,3,3]
        e.preventDefault();

        if (arraysEqual(chordArr, currentChord)) {
            setScore(score + 1)
            setStreak(streak + 1)
            setCurrentChord(generateChord())
            setAnimation(true)
            setTimeout(() => setAnimation(false), 1000)
            buttonDiv.current.childNodes.forEach(node => { // Removes the bg-red class from all of the buttons
                node.classList.remove('bg-red-400')
            })
        } else {
            setStreak(0)
            e.target.classList.add('bg-red-400');
        }
    }

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-25%" },
    };

    return (
        <div className='flex justify-center items-center flex-col gap-16'>
            <h1 className='text-white text-3xl'>Open Chord Test</h1>

            <button onClick={() => playChord(currentChord)} className='p-2 bg-neutral-500 rounded-md text-xl text-white w-32 hover:opacity-70'>Play Chord</button>
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

            <div className="flex flex-wrap justify-center gap-2" ref={buttonDiv}>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([null,0,2,2,2,0], e)}>A</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([null,0,2,2,1,0], e)}>Amin</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([null,3,2,0,1,0], e)}>C</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([null,null,0,2,3,2], e)}>D</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([null,0,0,2,3,1], e)}>Dmin</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([0,2,2,1,0,0], e)}>E</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([0,2,2,0,0,0], e)}>Emin</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([3,2,0,0,0,1], e)}>G</button>
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