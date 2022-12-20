import React, { useState, useEffect, useRef } from 'react';
import playChord from '../utils/GuitarChords';
import { key } from '../utils/key.js';
import { arraysEqual, generateNote } from '../utils/utilFunctions';
import { motion, AnimatePresence } from "framer-motion";

import { AiFillFire } from 'react-icons/ai';
import { MdScore } from 'react-icons/md';

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
                    node.style.backgroundColor = '#4b5975';
                })
                playChord(currentChord)
                break;
            } else {
                setStreak(0)
                e.target.style.backgroundColor = '#b81b2c';
            }
        }
        return;
    }

    let content;
    if (difficulty === 'easy') {
        content = (
            <div className="flex flex-wrap justify-center gap-2" ref={buttonDiv}>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('C', e)}>C</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('D', e)}>D</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('E', e)}>E</button>
            </div>
        )
    } else if (difficulty === 'medium') {
        content = (
            <div className="flex flex-wrap justify-center gap-2" ref={buttonDiv}>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70 bg-red-500' onClick={(e) => takeGuess('C', e)}>C</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('D', e)}>D</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('E', e)}>E</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('F', e)}>F</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('G', e)}>G</button>
            </div>
        )
    } else if (difficulty === 'hard') {
        content = (
            <div className="flex flex-wrap justify-center gap-2" ref={buttonDiv}>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('C', e)}>C</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('D', e)}>D</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('E', e)}>E</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('F', e)}>F</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('G', e)}>G</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('A', e)}>A</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('B', e)}>B</button>
            </div>
        )
    } else if (difficulty === 'challenging') {
        content = (
            <div className="flex flex-wrap justify-center gap-2" ref={buttonDiv}>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('A', e)}>A</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('A#/Bb', e)}>A#/Bb</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('B', e)}>B</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('C', e)}>C</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('C#/Db', e)}>C#/Db</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('D', e)}>D</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('D#/Eb', e)}>D#/Eb</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('E', e)}>E</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('F', e)}>F</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('F#/Gb', e)}>F#/Gb</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('G', e)}>G</button>
                <button className='p-2 bg-[#4b5975] rounded-md text-xl text-white w-20  hover:opacity-70' onClick={(e) => takeGuess('G#/Ab', e)}>G#/Ab</button>
            </div>
        )
    }

    const variants = {
        open: { opacity: 1, y: 0 },
        closed: { opacity: 0, y: "-25%" },
    };

    return (
        <div className='flex justify-center items-center flex-col gap-16'>
            <div className="h-[82vh] flex items-center justify-around flex-col gap-y-10 text-center">
                <h1 className='text-white text-5xl mt-8'>Pitch Detection Test</h1>
                <button onClick={() => playChord(currentChord)} className='p-5 bg-[#4b5975] rounded-md text-4xl text-white hover:opacity-70'>Play Note</button>

                <div className='flex gap-16'>
                    <div className='bg-[#4b5975] py-5 px-8 flex flex-col items-center gap-3 rounded-lg relative'>
                        <MdScore className='text-4xl text-green-400' />
                        <h3 className='text-white text-5xl'>{score}</h3>
                        <AnimatePresence initial={false}>
                            <motion.p className='text-green-400 text-xl right-3 bottom-1/4 absolute' variants={variants} initial={{ opacity: 0 }} animate={animation ? "open" : "closed"} exit={{ opacity: 0 }}>+1</motion.p>
                        </AnimatePresence>
                    </div>
                    <div className='bg-[#4b5975] py-5 px-8 flex flex-col items-center gap-3 rounded-lg'>
                        <AiFillFire className='text-4xl text-orange-500' />
                        <h3 className='text-white text-5xl'>{streak}</h3>
                        <AnimatePresence initial={false}>
                            <motion.p className='text-green-400 text-xl right-3 bottom-1/4 absolute' variants={variants} initial={{ opacity: 0 }} animate={animation ? "open" : "closed"} exit={{ opacity: 0 }}>+1</motion.p>
                        </AnimatePresence>
                    </div>
                </div>

                {content}
            </div>

            <h2 className='text-white text-5xl'>Settings:</h2>
            <form action='#' className='flex flex-col justify-start'>
                <label htmlFor="difficulty" className='text-white text-2xl opacity-40'>Difficulty Level</label>
                <select onChange={(e) => setDifficulty(e.target.value) } name='difficulty' id='difficulty' className='p-2 text-white bg-[#4b5975] text-lg rounded-md'>
                    <option value='easy'>Easy (C, D, E)</option>
                    <option value='medium'>Medium (C, D, E, F, G)</option>
                    <option value='hard'>Hard (C-Scale: C, D, E, F, G, A, B)</option>
                    <option value='challenging'>Difficult (Chromatic Scale)</option>
                </select>
            </form>

            <h3 className='text-white text-5xl'>How to use:</h3>
            <ol className='p-2 text-white'>
                <li className='mb-5 text-xl'>1. Hit the "Play Note" button to hear a note.</li>
                <li className='mb-5 text-xl'>2. From there try your best to guess the note, either by humming it or by trying to play it on your guitar.</li>
                <li className='mb-5 text-xl'>3. Once you think you have it go ahead and take a guess.</li>
            </ol>

            <h1 className='text-white text-4xl text-center'>Why should I practice pitch detection?</h1>
            <ul className='p-2 text-white w-3/4 my-0 mx-auto tracking-wide leading-8 text xl list-disc'>
                <li className='mb-5 text-xl'>Improved musical performance: Being able to accurately detect pitch can help you play music in tune, which is important for both solo and ensemble playing. It can also help you improve your sense of timing and rhythm, as these skills are closely related to pitch detection.</li>
                <li className='mb-5 text-xl'>Improved musical composition: Having a good ear for pitch can help you write melodies and chord progressions that sound harmonically pleasing. It can also help you transcribe music you hear and create your own arrangements.</li>
                <li className='mb-5 text-xl'>Improved musical appreciation: Being able to detect pitch can enhance your overall musical listening experience by allowing you to better understand the structure and form of the music you are listening to.</li>
                <li className='mb-5 text-xl'>Improved communication with other musicians: Being able to accurately detect pitch can help you communicate with other musicians about music you are working on together, such as by singing a melody or playing a chord progression for them. It can also make it easier to follow written music.</li>
            </ul>
            <p className='text-white w-3/4 my-0 mx-auto tracking-wide leading-8 text-xl text-center'>Overall, developing pitch detection skills can be beneficial for anyone who is interested in music, whether as a performer, composer, listener, or all of the above.</p>
        </div>
    )
}
