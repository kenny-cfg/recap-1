const submitButton = document.getElementById('submit-button')
const inputBox = document.getElementById('input-box')

submitButton.onclick = addEventListener('click', submitWord)

function submitWord() {
  console.log('You submitted a word')
  const inputWord = inputBox.value
  console.log(`You submitted '${inputWord}'`)
}