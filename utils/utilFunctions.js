function arraysEqual(a, b) {// Checks 2 arrays for equality
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
  
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
}

function generateNote() { // Needs to return [null,5,null,null,null,null]
    let tempArr = [null,null,null,null,null,null]
    let string = (Math.random() * 5).toFixed(0) // 0-5 (String 1-6)
    let fret = (Math.random() * 12).toFixed(0) // 0-13 (Fret 0-12)

    tempArr[string] = Number(fret)
    console.log(tempArr)
    return tempArr
}

export {arraysEqual, generateNote}
