const questionArray = [
    {
        question: "What is the capital of Ethiopia?",
        answer: "Addis Ababa",
        options: ["Addis Ababa", "London", "Berlin", "Rome"],
    },
    {
        question: "What is the capital of Germany?",
        answer: "Berlin",
        options: ["London", "Addis Ababa", "Berlin", "Rome"],
    },
    {
        question: "What is the capital of Italy?",
        answer: "Rome",
        options: ["London", "Addis Ababa", "Berlin", "Paris"],
    },
    {
        question: "What is the capital of England?",
        answer: "London",
        options: ["Paris", "Addis Ababa", "Berlin", "London"],
    },
    {
        question: "What is the capital of Spain?",
        answer: "Madrid",
        options: ["London", "Addis Ababa", "Madrid", "Rome"],
    },
];
// console.log(questionArray[0].options[0]);

const question = document.getElementById("questions");
const choices = document.getElementById("choices");
const next = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    next.innerHTML = "Next";
    showQuestion();
}
function showQuestion() {
    let currentQuestion = questionArray[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questions.innerHTML =
        "Question " + questionNumber + ": " + currentQuestion.question;
    choices.innerHTML = "";
    currentQuestion.options.forEach(function (option) {
        const button = document.createElement("button");
        button.innerHTML = option;
        button.classList.add("btn");
        choices.appendChild(button);
        if (option == currentQuestion.answer) {
            button.dataset.correct = true;
        }

        button.addEventListener("click", checkAnswer);
    });
}
// console.log(questionArray[0].options[0]);
function checkAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    Array.from(choices.children).forEach(function (button) {
        if (button.dataset.correct) {
            button.classList.add("correct");
        } else {
            button.classList.add("wrong");
        }
    });
    next.style.display = "block";

    if (correct) {
        score++;
    }
    next.addEventListener("click", nextQuestion);
}
function nextQuestion() {
    if (currentQuestionIndex < questionArray.length) {
        currentQuestionIndex++;
        if (currentQuestionIndex < questionArray.length) {
            showQuestion();
        } else {
            next.style.display = "none";
            while (choices.firstChild) {
                choices.removeChild(choices.firstChild);
            }
            question.innerHTML =
                "You got " + score + " out of " + questionArray.length + " correct!";
            next.innerHTML = "Restart";
            next.style.display = "block";
        }
    } else {
        startQuiz();
    }
}

startQuiz();
