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

const wordsJoinedTogether = inputWords.join(' ')

console.log(wordsJoinedTogether)
