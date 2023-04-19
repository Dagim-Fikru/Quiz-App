const questionArray = [
    {
        question: "What is the capital of France?",
        answer: "Paris",
        options: [ "Paris", "London", "Berlin", "Rome" ]
    },
    { question: "What is the capital of Germany?",
        answer: "Berlin",
        options: [ "Paris", "London", "Berlin", "Rome" ]
    },
    { question: "What is the capital of Italy?",
        answer: "Rome",
        options: [ "Paris", "London", "Berlin", "Rome" ]
    },
    { question: "What is the capital of England?",
        answer: "London",
        options: [ "Paris", "London", "Berlin", "Rome" ]
    },
    { question: "What is the capital of Spain?",
        answer: "Madrid",
        options: [ "Paris", "London", "Berlin", "Madrid" ]
    }
];
const question = document.getElementById("questions");
const choices = document.getElementById("choices");
const next = document.getElementById("next-btn");
let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    currentQuestion = 0;
    score=0;
    next.innerHTML = "Next";
    showQuestion();

    // let q = questionArray[currentQuestion];
    // question.innerHTML = q.question;
    // choices.innerHTML = "";
    // q.options.forEach(function(option) {
    //     let button = document.createElement("button");
    //     button.innerHTML = option;
    //     button.addEventListener("click", checkAnswer);
    //     choices.appendChild(button);
    // });
}
function showQuestion() {
    let q = questionArray[currentQuestion];
    let questionNumber = currentQuestion + 1;
    questionElement.innerHTML = `Question ${questionNumber}: ${q.question}`;
    q.answers.forEach(function(answer) {
        let button = document.createElement("button");
        button.innerHTML = answer;
        button.classList.add("btn");
        button.addEventListener("click", checkAnswer);
        choices.appendChild(button);
    });
} 
function checkAnswer() {
    let q = questionArray[currentQuestion];
    if (this.innerHTML === q.answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion >= questionArray.length) {
        next.innerHTML = "Finish";
    }
    showQuestion();
}
loadQuestion();