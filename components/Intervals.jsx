import React, { useState, useEffect, useRef } from 'react';
import playChord from '../utils/GuitarChords';
import { generateInterval } from '../utils/utilFunctions';
import { motion, AnimatePresence } from "framer-motion";

import { AiFillFire } from 'react-icons/ai';
import { MdScore } from 'react-icons/md';

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
                node.style.backgroundColor = '#4b5975';
            })
            playChord(currentInterval)
        } else {
            setStreak(0)
            e.target.style.backgroundColor = '#b81b2c';
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
            <div className="h-[60vh] flex items-center justify-around flex-col gap-y-10 text-center">
                <h1 className='text-white text-5xl'>Interval Training</h1>
                <button onClick={() => handlePlay()} className='p-5 bg-[#4b5975] rounded-md text-4xl text-white hover:opacity-70'>Play Interval</button>

                <div className="flex gap-16">
                    <div className='bg-[#4b5975] py-5 px-8 flex flex-col items-center gap-3 rounded-lg relative'>
                        <MdScore className='text-4xl text-white' />
                        <h3 className='text-white text-5xl'>{score}</h3>
                        <AnimatePresence initial={false}>
                            <motion.p className='text-green-400 text-xl right-3 bottom-1/4 absolute' variants={variants} initial={{ opacity: 0 }} animate={animation ? "open" : "closed"} exit={{ opacity: 0 }}>+1</motion.p>
                        </AnimatePresence>
                    </div>
                    <div className='bg-[#4b5975] py-5 px-8 flex flex-col items-center gap-3 rounded-lg relative'>
                        <AiFillFire className='text-4xl text-orange-500' />
                        <h3 className='text-white text-5xl'>{streak}</h3>
                        <AnimatePresence initial={false}>
                            <motion.p className='text-green-400 text-xl right-3 bottom-1/4 absolute' variants={variants} initial={{ opacity: 0 }} animate={animation ? "open" : "closed"} exit={{ opacity: 0 }}>+1</motion.p>
                        </AnimatePresence>
                    </div>
                </div>

            </div>

            <div className="flex flex-wrap justify-center gap-2" ref={buttonDiv}>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-40  hover:opacity-70' onClick={(e) => takeGuess('maj3', e)}>Major 3rd</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-40  hover:opacity-70' onClick={(e) => takeGuess('p5', e)}>Perfect 5th</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-40  hover:opacity-70' onClick={(e) => takeGuess('octave', e)}>Octave</button>
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
