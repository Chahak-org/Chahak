import { ModuleData } from './user_data.js'
// All DOM
const userName = document.getElementById('UN')
let timerDisplay = document.getElementById('timer')
const prevButton = document.getElementById('Prev')
const nextButton = document.getElementById('Next')
const submitButton = document.getElementById('Submit')
const fetchQDiv = document.getElementById('fetchQ')

let questionIndex = 0
let userAnswers = []
let totalQuestions = 0
let startTime = Date.now()
let quizData = []

// Fetch data from the URL
const urlParams = new URLSearchParams(window.location.search)
const username = urlParams.get('name') || 'Guest'
const moduleId = Number(urlParams.get('moduleId'))
userName.innerText = username

// Timer (5 min 25 sec)
let timeLimit = 5 * 60 + 25 // Convert to seconds
let timer = setInterval(() => {
  let elapsedTime = Date.now() - startTime
  let remainingTime = timeLimit - Math.floor(elapsedTime / 1000)
  let minutes = Math.floor(remainingTime / 60)
  let seconds = remainingTime % 60
  timerDisplay.textContent = `${minutes} Min ${
    seconds < 10 ? '0' : ''
  }${seconds} Sec`

  if (remainingTime <= 0) {
    clearInterval(timer)
    showResults() // Auto-submit when time runs out
  }
}, 1000)

quizData = ModuleData[moduleId]['Q'] //------->

console.log(typeof quizData)
console.log(quizData)

totalQuestions = quizData.length
renderQuestion();
// Function to dynamically generate and render the HTML for a question
function renderQuestion () {
  const currentQuestion = quizData[questionIndex]

  // Generate the HTML for the current question and its options
  const questionHTML = `
        <div class="question">
            <bold id="QN">Q${questionIndex + 1}</bold> ${
    currentQuestion.question
  }
        </div>
      <div class="opt">
    <input type="radio" id="o1" name="option" value="0">
    <label for="o1">${currentQuestion.options[0]}</label>

    <input type="radio" id="o2" name="option" value="1">
    <label for="o2">${currentQuestion.options[1]}</label>

    <input type="radio" id="o3" name="option" value="2">
    <label for="o3">${currentQuestion.options[2]}</label>

    <input type="radio" id="o4" name="option" value="3">
    <label for="o4">${currentQuestion.options[3]}</label>
</div>
    `

  // Set the dynamically generated HTML inside the `fetchQ` div
  fetchQDiv.innerHTML = questionHTML

  // Show/hide navigation buttons
 
    prevButton.style.display = questionIndex === 0 ? 'none' : 'inline';
    nextButton.style.display =
      questionIndex === totalQuestions - 1 ? 'none' : 'inline';
    submitButton.style.display =
      questionIndex === totalQuestions - 1 ? 'inline' : 'none';
  
  
  // Restore the user's previous selection if available
  const selectedOption = userAnswers[questionIndex]
  if (selectedOption !== undefined) {
    document.querySelector(`input[name="option"][value="${selectedOption}"]`).checked = true
  }
}

// Move to next question
nextButton.addEventListener('click', () => {
  saveAnswer()
  questionIndex++
  renderQuestion()
})

// Move to previous question
prevButton.addEventListener('click', () => {
  saveAnswer()
  questionIndex--
  renderQuestion()
})

// Submit the quiz
submitButton.addEventListener('click', showResults)

// Save the user's selected answer
function saveAnswer () {
  const selectedOption = document.querySelector('input[name="option"]:checked')
  userAnswers[questionIndex] = selectedOption ? parseInt(selectedOption.value) : null
}

console.log("totalQuestions: ",totalQuestions);
quizData.forEach((question,index)=>{
  console.log(typeof(question.answer));
})

// Calculate and show results
function showResults () {
  saveAnswer();
  clearInterval(timer)

  // Calculate score
  let correctAnswers = 0

  quizData.forEach((question, index) => {

    if ( userAnswers[index] !== null && userAnswers[index] == parseInt(question.answer)) {
      correctAnswers++
    }
  })

  console.log(correctAnswers, totalQuestions)
  let percentage = (correctAnswers / totalQuestions) * 100
  let passStatus = correctAnswers == totalQuestions ? 'Pass' : 'Fail'
  let timeTaken = (Date.now() - startTime) / 1000 // in seconds
  let minutesTaken = Math.floor(timeTaken / 60)
  let secondsTaken = Math.floor(timeTaken % 60)

  // Encode the data to be sent through the URL
  const name = encodeURIComponent(username)
  const TimeTaken = `${minutesTaken} Min ${
    secondsTaken < 10 ? '0' : ''
  }${secondsTaken} Sec`
  const totalMarks = encodeURIComponent(correctAnswers)
  const percentageValue = encodeURIComponent(percentage.toFixed(2))
  const status = encodeURIComponent(passStatus)

  // Redirect to result.html with the encoded data as query parameters
  window.location.href = `result.html?name=${name}&moduleId=${moduleId}&time=${TimeTaken}&marks=${totalMarks}&percentage=${percentageValue}&status=${status}`
}
