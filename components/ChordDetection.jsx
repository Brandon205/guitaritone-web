import React, { useState, useEffect, useRef } from 'react'
import playChord from '../utils/GuitarChords';
import { arraysEqual, generateChord } from '../utils/utilFunctions';
import { motion, AnimatePresence } from "framer-motion";

import { AiFillFire } from 'react-icons/ai';
import { MdScore } from 'react-icons/md';

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
                node.style.backgroundColor = '#4b5975';
            })
            playChord(currentChord)
        } else {
            setStreak(0)
            e.target.style.backgroundColor = '#b81b2c';
        }
    }

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-25%" },
    };

    return (
        <div className='flex justify-center items-center flex-col gap-12'>
            <div className="h-[62vh] flex items-center justify-around flex-col gap-y-10 text-center">
                <h1 className='text-white text-5xl mt-8'>Open Chord Test</h1>
                <button onClick={() => playChord(currentChord)} className='p-5 bg-[#4b5975] rounded-md text-4xl text-white hover:opacity-70'>Play Chord</button>

                <div className="flex gap-16">
                    <div className='bg-[#4b5975] py-5 px-8 flex flex-col items-center gap-3 rounded-lg relative'>
                        <MdScore className='text-4xl text-green-400' />
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
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([null,0,2,2,2,0], e)}>A</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([null,0,2,2,1,0], e)}>Amin</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([null,3,2,0,1,0], e)}>C</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([null,null,0,2,3,2], e)}>D</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([null,0,0,2,3,1], e)}>Dmin</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([0,2,2,1,0,0], e)}>E</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([0,2,2,0,0,0], e)}>Emin</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess([3,2,0,0,0,1], e)}>G</button>
            </div>

            <h1 className='text-white text-4xl'>How to use:</h1>
            <ol className='p-2 text-white'>
                <li className='mb-3'>1. Hit the "Play Chord" button to hear a chord.</li>
                <li className='mb-3'>2. From there try your best to guess the chord, either by humming the chord or by trying to play it on your guitar.</li>
                <li className='mb-3'>3. Once you think you have it go ahead and take a guess, if you're correct the app will add one to both your score and streak counters.</li>
            </ol>
        </div>
    )
}