/*
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
*/
const inputWords = ['Hello', 'Mum', 'How', 'Are', 'YOU']

let wordsJoinedTogether = ''
let isFirstWord = true
for (const word of inputWords) {
  if (!isFirstWord) {
    wordsJoinedTogether = wordsJoinedTogether + ' '
  }
  wordsJoinedTogether = wordsJoinedTogether + word
  isFirstWord = false
}

console.log(wordsJoinedTogether)
