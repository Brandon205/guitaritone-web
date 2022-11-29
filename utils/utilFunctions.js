import key from './key';

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
  let length;
  if (difficulty === 'easy') {
    tempArr = ['A', 'C', 'G']
    length = 3
  } else if (difficulty === 'medium') {
    tempArr = ['A', 'B', 'C', 'D', 'G']
    length = 5
  } else if (difficulty === 'hard') {
    tempArr = ['A', 'B', 'C', 'D', 'G', 'E', 'F']
    length = 7
  } else if (difficulty === 'challenging') {
    tempArr = ['A', 'A#/Bb', 'B', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab']
    length = 12
  }
  
  let keyCenterIndex = Math.trunc(Math.random() * length  - 1) // Used to index the tempArr and get a random key to go off of
  console.log("keyCenterIndex: ", keyCenterIndex)

  let tempval = tempArr[keyCenterIndex]
  console.log("key note: ", tempval)

  let noteChordIndex = Math.trunc(Math.random() * key[tempval].length - 1)
  console.log("noteChordIndex: ", noteChordIndex)

  let noteChord = key[tempval][noteChordIndex]
    
  console.log("NOTECHORD: ", noteChord)
  return noteChord
}

export {arraysEqual, generateNote}
