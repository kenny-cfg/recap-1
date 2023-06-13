const inputWords = getWords()
const wordsJoinedTogether = inputWords.join(' ')
console.log(wordsJoinedTogether)

function getWords() {
  const inputWords = []
  while (true) {
    const inputWord = prompt('Input a word (blank for finish)')
    if (inputWord === '') {
      return inputWords
    }
    inputWords.push(inputWord)
  }
}
