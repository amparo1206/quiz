const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.elige-texto'));
const progresoTexto = document.querySelector('#progresoTexto');
const scoreText = document.querySelector('#score');
const barraDeProgresoFull = document.querySelector('#barraDeProgresoFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: '¿Quién fue el fundador de la casa Gryffindor?',
        choice1: 'Helga Hufflepuff',
        choice2: 'Salazar Slytherin',
        choice3: 'Godric Gryffindor',
        choice4: 'Rowena Ravenclaw',
        answer: 3,
    },
    {
        question: '¿En qué película nadie se corta el pelo?',
        choice1: 'La Piedra Filosofal',
        choice2: 'La cámara de los secretos',
        choice3: 'El Príncipe mestizo',
        choice4: 'El Cáliz de Fuego',
        answer: 4,
    },
    {
        question: 'En Harry Potter y las Reliquias de la Muerte ¿Quién saca la espada de Gryffindor del sombrero seleccionador?',
        choice1: 'Neville Longbottom',
        choice2: 'Parvati Patil',
        choice3: 'Pansy Parkinson',
        choice4: 'Hermione Granger',
        answer: 1,
    },
    {
        question: '¿Quién lidera en la batalla final a los elfos domésticos?',
        choice1: 'Dobby',
        choice2: 'Winky ',
        choice3: 'Kreacher',
        choice4: 'Fred Weasley',
        answer: 3,
    },
    {
        question: '¿Quién es la futura ministra de magia?',
        choice1: 'Ginny',
        choice2: 'Molly',
        choice3: 'Thonks',
        choice4: 'Hermione',
        answer: 4,
    },
    {
        question: '¿Qué hechizo utiliza siempre Harry Potter?',
        choice1: 'Expeliarmus',
        choice2: 'Expelliarmus',
        choice3: 'Espelliarmus',
        choice4: 'Expelliarmonos',
        answer: 2,
    },
    {
        question: '¿Quién es el Príncipe Mestizo?',
        choice1: 'Remus Lupin',
        choice2: 'Severus Snape',
        choice3: 'Sirius Black',
        choice4: 'Arthur Weasley',
        answer: 2,
    },
    {
        question: '¿Quién mata a Bellatrix Lestrange?',
        choice1: 'J.K.Rowling',
        choice2: 'Ginny Weasley',
        choice3: 'Albus Dumbledore',
        choice4: 'Molly Weasley',
        answer: 4,
    },
    {
        question: '¿Quién libera a Dobby?',
        choice1: 'Lucius Malfoy',
        choice2: 'Draco Malfoy',
        choice3: 'Harry Potter',
        choice4: 'Albus Dumbledore',
        answer: 3,
    },
    {
        question: '¿En cuántos idiomas están traducidos los libros de Harry Potter?',
        choice1: '80',
        choice2: '68',
        choice3: '55',
        choice4: '70',
        answer: 1,
    }
    
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('../html/final.html')  
    }
    questionCounter++ 
    progresoTexto.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    barraDeProgresoFull.style.width = `${(questionCounter/MAX_QUESTIONS) *100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions [questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset ['number']
        choice.innerText = currentQuestion ['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!acceptingAnswers) return

        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 
        'incorrect'
        
        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion ()
        }, 1000)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score 
}

startGame ()