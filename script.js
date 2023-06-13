const inputWords = []
while (true) {
  const inputWord = prompt('Input a word (blank for finish)')
  if (inputWord === '') {
    break
  }
  inputWords.push(inputWord)
}

const wordsJoinedTogether = inputWords.join(' ')

console.log(wordsJoinedTogether)
