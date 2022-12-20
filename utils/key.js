const key = {
    "A": [
        [5,null,null,null,null,null],
        [null,0,null,null,null,null],
        [null,12,null,null,null,null],
        [null,null,7,null,null,null],
        [null,null,null,2,null,null],
        [null,null,null,null,10,null],
        [null,null,null,null,null,5],
    ],
    "A#/Bb": [
        [6,null,null,null,null,null],
        [null,1,null,null,null,null],
        [null,null,8,null,null,null],
        [null,null,null,3,null,null],
        [null,null,null,null,11,null],
        [null,null,null,null,null,6],
    ],
    "B": [
        [7,null,null,null,null,null],
        [null,2,null,null,null,null],
        [null,null,9,null,null,null],
        [null,null,null,4,null,null],
        [null,null,null,null,0,null],
        [null,null,null,null,12,null],
        [null,null,null,null,null,7],
    ],
    "C": [
        [8,null,null,null,null,null],
        [null,3,null,null,null,null],
        [null,null,10,null,null,null],
        [null,null,null,5,null,null],
        [null,null,null,null,1,null],
        [null,null,null,null,null,8],
    ],
    "C#/Db": [
        [9,null,null,null,null,null],
        [null,4,null,null,null,null],
        [null,null,11,null,null,null],
        [null,null,null,6,null,null],
        [null,null,null,null,2,null],
        [null,null,null,null,null,9],
    ],
    "D": [
        [10,null,null,null,null,null],
        [null,5,null,null,null,null],
        [null,null,0,null,null,null],
        [null,null,12,null,null,null],
        [null,null,null,7,null,null],
        [null,null,null,null,3,null],
        [null,null,null,null,null,10],
    ],
    "D#/Eb": [
        [11,null,null,null,null,null],
        [null,6,null,null,null,null],
        [null,null,1,null,null,null],
        [null,null,null,8,null,null],
        [null,null,null,null,4,null],
        [null,null,null,null,null,11],
    ],
    "E": [
        [0,null,null,null,null,null],
        [12,null,null,null,null,null],
        [null,7,null,null,null,null],
        [null,null,2,null,null,null],
        [null,null,null,9,null,null],
        [null,null,null,null,5,null],
        [null,null,null,null,null,0],
        [null,null,null,null,null,12],
    ],
    "F": [
        [1,null,null,null,null,null],
        [null,8,null,null,null,null],
        [null,null,3,null,null,null],
        [null,null,null,10,null,null],
        [null,null,null,null,6,null],
        [null,null,null,null,null,1],
    ],
    "F#/Gb": [
        [2,null,null,null,null,null],
        [null,9,null,null,null,null],
        [null,null,4,null,null,null],
        [null,null,null,11,null,null],
        [null,null,null,null,7,null],
        [null,null,null,null,null,2],
    ],
    "G": [
        [3,null,null,null,null,null],
        [null,10,null,null,null,null],
        [null,null,5,null,null,null],
        [null,null,null,0,null,null],
        [null,null,null,12,null,null],
        [null,null,null,null,8,null],
        [null,null,null,null,null,3],
    ],
    "G#/Ab": [
        [4,null,null,null,null,null],
        [null,11,null,null,null,null],
        [null,null,6,null,null,null],
        [null,null,null,1,null,null],
        [null,null,null,null,9,null],
        [null,null,null,null,null,4],
    ]
}

const chordKey = {
    "A": [null,0,2,2,2,0],
    "Amin": [null,0,2,2,1,0],
    "C": [null,3,2,0,1,0],
    "D": [null,null,0,2,3,2],
    "Dmin": [null,0,0,2,3,1],
    "E": [0,2,2,1,0,0],
    "Emin": [0,2,2,0,0,0],
    "G": [3,2,0,0,0,1]
}

const stringNoteKey = {
    "E (6th)": {
        "A": 5,
        "A#/Bb": 6,
        "B": 7,
        "C": 8,
        "C#/Db": 9,
        "D": 10,
        "D#/Eb": 11,
        "E": 0,
        "F": 1,
        "F#/Gb": 2,
        "G": 3,
        "G#/Ab": 4,
    },
    "A (5th)": {
        "A": 0,
        "A#/Bb": 1,
        "B": 2,
        "C": 3,
        "C#/Db": 4,
        "D": 5,
        "D#/Eb": 6,
        "E": 7,
        "F": 8,
        "F#/Gb": 9,
        "G": 10,
        "G#/Ab": 11,
    },
    "D (4th)": {
        "A": 7,
        "A#/Bb": 8,
        "B": 9,
        "C": 10,
        "C#/Db": 11,
        "D": 0,
        "D#/Eb": 1,
        "E": 2,
        "F": 3,
        "F#/Gb": 4,
        "G": 5,
        "G#/Ab": 6,
    },
    "G (3rd)": {
        "A": 2,
        "A#/Bb": 3,
        "B": 4,
        "C": 5,
        "C#/Db": 6,
        "D": 7,
        "D#/Eb": 8,
        "E": 9,
        "F": 10,
        "F#/Gb": 11,
        "G": 0,
        "G#/Ab": 1,
    },
    "B (2nd)": {
        "A": 10,
        "A#/Bb": 11,
        "B": 0,
        "C": 1,
        "C#/Db": 2,
        "D": 3,
        "D#/Eb": 4,
        "E": 5,
        "F": 6,
        "F#/Gb": 7,
        "G": 8,
        "G#/Ab": 9,
    },
    "e (1st)": {
        "A": 5,
        "A#/Bb": 6,
        "B": 7,
        "C": 8,
        "C#/Db": 9,
        "D": 10,
        "D#/Eb": 11,
        "E": 0,
        "F": 1,
        "F#/Gb": 2,
        "G": 3,
        "G#/Ab": 4,
    }
}

export {key, chordKey, stringNoteKey}