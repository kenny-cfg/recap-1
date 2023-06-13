const submitButton = document.getElementById('submit-button')
const joinButton = document.getElementById('join-button')
const inputBox = document.getElementById('input-box')
const outputSection = document.getElementById('output')
const inputWords = []

submitButton.addEventListener('click', submitWord)
joinButton.addEventListener('click', joinWords) 

function submitWord() {
  const inputWord = inputBox.value
  inputWords.push(inputWord)
  inputBox.value = ''
}

function joinWords() {
  const joinedWords = inputWords.join(' ')
  outputSection.innerText = joinedWords
}