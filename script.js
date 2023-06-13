const submitButton = document.getElementById('submit-button')
const joinButton = document.getElementById('join-button')
const inputBox = document.getElementById('input-box')
const outputSection = document.getElementById('output')
const inputWordsListElement = document.getElementById('input-words-list')
const inputWords = []

submitButton.addEventListener('click', submitWord)
joinButton.addEventListener('click', joinWords) 

function submitWord() {
  const inputWord = inputBox.value
  inputWords.push(inputWord)
  inputBox.value = ''
  inputWordsListElement.innerHTML = ''
  for (const word of inputWords) {
    const newListElement = document.createElement('li')
    newListElement.innerText = word
    inputWordsListElement.append(newListElement)
  }
}

function joinWords() {
  const joinedWords = inputWords.join(' ')
  outputSection.innerText = joinedWords
}