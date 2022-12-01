import React, { useState, useEffect, useRef } from 'react';
import playChord from '../utils/GuitarChords';
import { generateInterval } from '../utils/utilFunctions';
import { motion, AnimatePresence } from "framer-motion";

export default function Intervals() {
    const [currentInterval, setCurrentInterval] = useState([[null,null,null,null,null,null], [null,null,null,null,null,null], 'maj3'])
    const [streak, setStreak] = useState(0);
    const [score, setScore] = useState(0);
    const [animation, setAnimation] = useState(false);

    const buttonDiv = useRef(null);

    useEffect(() => {
        setCurrentInterval(generateInterval())
    }, [])

    let takeGuess = (interval, e) => {
        e.preventDefault();

        if (interval === currentInterval[2]) {
            setScore(score + 1)
            setStreak(streak + 1)
            setCurrentInterval(generateInterval())
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

    let handlePlay = () => {
        playChord(currentInterval[0])
        setTimeout(() => playChord(currentInterval[1]), 650)
    }

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-25%" },
    };

    return (
        <div className='flex justify-center items-center flex-col gap-16'>
            <h1 className='text-white text-3xl'>Interval Training</h1>
            <button onClick={() => handlePlay()} className='p-2 bg-neutral-500 rounded-md text-xl text-white w-32 hover:opacity-70'>Play Interval</button>
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
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('maj3', e)}>Major 3rd</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('p5', e)}>Perfect 5th</button>
                <button className='p-2 bg-neutral-500 rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('octave', e)}>Octave</button>
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
