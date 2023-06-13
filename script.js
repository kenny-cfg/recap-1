const submitButton = document.getElementById('submit-button')
const joinButton = document.getElementById('join-button')
const inputBox = document.getElementById('input-box')
const outputSection = document.getElementById('output')
const inputWordsListElement = document.getElementById('input-words-list')
let inputWords = []

submitButton.addEventListener('click', submitWord)
joinButton.addEventListener('click', joinWords) 

function submitWord() {
  const inputWord = inputBox.value
  inputWords.push(inputWord)
  inputBox.value = ''
  showInputWords()
}

function joinWords() {
  const joinedWords = inputWords.join(' ')
  outputSection.innerText = joinedWords
  inputWords = []
  showInputWords()
}

function showInputWords() {
  inputWordsListElement.innerHTML = ''
  for (const word of inputWords) {
    const newListElement = document.createElement('li')
    newListElement.innerText = word
    inputWordsListElement.append(newListElement)
  }
}