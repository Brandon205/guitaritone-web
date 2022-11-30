import { key, chordKey, stringNoteKey } from './key';

function arraysEqual(a, b) {// Checks 2 arrays for equality
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}

function generateNote(difficulty) { // Needs to return [null,5,null,null,null,null]
  let tempArr;
  if (difficulty === 'easy') {
    tempArr = ['A', 'C', 'G']
  } else if (difficulty === 'medium') {
    tempArr = ['A', 'B', 'C', 'D', 'G']
  } else if (difficulty === 'hard') {
    tempArr = ['A', 'B', 'C', 'D', 'G', 'E', 'F']
  } else if (difficulty === 'challenging') {
    tempArr = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab']
  }
  
  let keyCenterIndex = Math.floor(Math.random() * tempArr.length) // Used to index the tempArr and get a random key to go off of

  let tempval = tempArr[keyCenterIndex]

  let noteChordIndex = Math.floor(Math.random() * key[tempval].length)

  let noteChord = key[tempval][noteChordIndex]
    
  return noteChord
}

function generateChord() {
  let tempArr = Object.keys(chordKey)
  let random = Math.floor(Math.random() * tempArr.length)

  return chordKey[tempArr[random]]
}

const intervals = ['maj3', 'p5', 'octave']
function generateInterval() {

  //choose random from intervals array
  let interval = intervals[Math.floor(Math.random() * intervals.length)]
  let intervalStringAddon;
  let intervalFretAddon;
  switch (interval) {
    case 'maj3':
      intervalFretAddon = -1
      intervalStringAddon = 1
      break;
    case 'p5':
      intervalFretAddon = 2
      intervalStringAddon = 1
      break;
    case 'octave':
      intervalFretAddon = 2
      intervalStringAddon = 2
  }

  //create 2 arrays full of null values
  let arr1 = [null,null,null,null,null,null,];
  let arr2 = [null,null,null,null,null,null,];

  //get a number between 0 and 4 (strings 1-5)(randomString) to start the interval at
  let randomString = Math.floor(Math.random() * 5)
  if (randomString === 4 && interval === 'octave') {
    randomString = 3
  }

  //get random number(randomFret) between 0 and 12
  let randomFret = Math.floor(Math.random() * 11 + 1)

  //fill first array with the randomFret at the index of the randomString
  //fill second array with the randomFret+2 at the index of randomString + 1
  if (randomString === 3) {
    arr1[randomString] = randomFret
    arr2[randomString + intervalStringAddon] = randomFret + intervalFretAddon + 1
  } else {
    arr1[randomString] = randomFret
    arr2[randomString + intervalStringAddon] = randomFret + intervalFretAddon
  }

  return [arr1, arr2, interval]
}

function generateStringNote(difficulty) {
  let stringOptions = ['E (6th)', 'A (5th)', 'D (4th)', 'G (3rd)', 'B (2nd)', 'e (1st)', ]
  let randomString = Math.floor(Math.random() * 5)
  randomString = stringOptions[randomString]
  let random2 = Object.keys(stringNoteKey)[Math.floor(Math.random() * 5)]

  let tempArr = [randomString];
  if (difficulty === 'beginner') {
    let randomNoteArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G']
    let randomNoteIndex = Math.floor(Math.random() * randomNoteArr.length)

    tempArr.push(randomNoteArr[randomNoteIndex])
  } else if (difficulty === 'intermediate') {
    let randomNote = Object.keys(stringNoteKey['E (6th)'])[Math.floor(Math.random() * 12)]
    tempArr.push(randomNote)
  }

  return tempArr
}

export {arraysEqual, generateNote, generateChord, generateInterval, generateStringNote}
