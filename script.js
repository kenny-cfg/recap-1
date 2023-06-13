const inputWords = []
let finishLoop = false
while (!finishLoop) {
  const inputWord = prompt('Input a word (blank for finish)')
  if (inputWord === '') {
    finishLoop = true
  } else {
    inputWords.push(inputWord)
  }
}

console.log(inputWords)
