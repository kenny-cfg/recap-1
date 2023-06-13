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
for (const word of inputWords) {
  wordsJoinedTogether = wordsJoinedTogether + ' ' + word
}

console.log(wordsJoinedTogether)
