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

// Fetch username from the URL
const urlParams = new URLSearchParams(window.location.search)
const username = urlParams.get('name') || 'Guest'
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

// Fetch questions from the JSON file
// fetch('../dataBase/question.json')
//   .then(response => response.json())
//   .then(data => {
//     quizData = data
//     totalQuestions = data.length
//     renderQuestion()
//   })
//   .catch(error => console.error('Failed to fetch questions:', error))

quizData = [
  {
      "question": "What is the full form of URL?",
      "options": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
      "answer": "Uniform Resource Locator"
  },
  {
      "question": "What is the full form of .NET?",
      "options": [".NET Framework", ".NET Platform", ".NET Development", ".NET Core"],
      "answer": ".NET Framework"
  },
  {
      "question": "What does HTML stand for?",
      "options": ["Hyper Text Markup Language", "High Text Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
      "answer": "Hyper Text Markup Language"
  },
  {
      "question": "What is the full form of CSS?",
      "options": ["Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets", "Computer Style Sheets"],
      "answer": "Cascading Style Sheets"
  },
  {
      "question": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Paris", "Lisbon"],
      "answer": "Paris"
  },
  {
      "question": "Who wrote 'Hamlet'?",
      "options": ["Charles Dickens", "William Shakespeare", "Mark Twain", "Leo Tolstoy"],
      "answer": "William Shakespeare"
  },
  {
      "question": "What is the largest planet in our solar system?",
      "options": ["Earth", "Mars", "Jupiter", "Saturn"],
      "answer": "Jupiter"
  },
  {
      "question": "What is the hardest natural substance on Earth?",
      "options": ["Gold", "Iron", "Diamond", "Quartz"],
      "answer": "Diamond"
  },
  {
      "question": "What is the chemical symbol for gold?",
      "options": ["Au", "Ag", "Fe", "Pb"],
      "answer": "Au"
  },
  {
      "question": "What year did the Titanic sink?",
      "options": ["1912", "1905", "1898", "1920"],
      "answer": "1912"
  }
]

totalQuestions = quizData.length
renderQuestion()



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
  prevButton.style.display = questionIndex === 0 ? 'none' : 'inline'
  nextButton.style.display =
    questionIndex === totalQuestions - 1 ? 'none' : 'inline'
  submitButton.style.display =
    questionIndex === totalQuestions - 1 ? 'inline' : 'none'

  // Restore the user's previous selection if available
  const selectedOption = userAnswers[questionIndex]
  if (selectedOption !== undefined) {
    document.querySelector(
      `input[name="option"][value="${selectedOption}"]`
    ).checked = true
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
  userAnswers[questionIndex] = selectedOption
    ? parseInt(selectedOption.value)
    : null
}

// Calculate and show results

function showResults () {
  clearInterval(timer)

  // Calculate score
  let correctAnswers = 0
  quizData.forEach((question, index) => {
    if (
      userAnswers[index] !== null &&
      question.options[userAnswers[index]] === question.answer
    ) {
      correctAnswers++
    }
  })

  let percentage = (correctAnswers / totalQuestions) * 100
  let passStatus = percentage >= 70 ? 'Pass' : 'Fail'
  let timeTaken = (Date.now() - startTime) / 1000 // in seconds
  let minutesTaken = Math.floor(timeTaken / 60)
  let secondsTaken = Math.floor(timeTaken % 60)

  // Encode the data to be sent through the URL
  const name = encodeURIComponent(username)
  const TimeTaken = `${minutesTaken} Min ${ secondsTaken < 10 ? '0' : ''}${secondsTaken} Sec`
  const totalMarks = encodeURIComponent(correctAnswers)
  const percentageValue = encodeURIComponent(percentage.toFixed(2))
  const status = encodeURIComponent(passStatus)

  // Redirect to result.html with the encoded data as query parameters
  window.location.href = `result.html?name=${name}&time=${TimeTaken}&marks=${totalMarks}&percentage=${percentageValue}&status=${status}`
}
