// Quiz App Data 
const questions = [
    {
        question: "What is the largest land mammal on Earth?",
        answers: ["A. Giraffe", "B. Lion", "C. Elephant", "D. Zebra"],
        correctAnswer: "C. Elephant",
    },
    
    {
        question: "Who painted the Mona Lisa?",
        answers: ["A. Leonardo da Vinci", "B. Pablo Picasso", "C. Vincent van Gogh", "D. Edvard Munch"],
        correctAnswer: "A. Leonardo da Vinci",
    },
    
    {
        question: "What is the name of the famous fictional detective created by Sir Arthur Conan Doyle?",
        answers: ["A. Moriarty", "B. J.K. Rowling", "C. Sherlock Holmes", "D. Sir Arthur Conan Doyle"],
        correctAnswer: "C. Sherlock Holmes",
    },
    
    {
        question: "Which country won the most recent FIFA World Cup?",
        answers: ["A. Brazil", "B. Argentina", "C. Germany", "D. France"],
        correctAnswer: "B. Argentina",
    },
    
    {
        question: "Who wrote the novel 'Pride and Prejudice' ?",
        answers: ["A. Jane Austen", "B. Charles Dickens", "C. Harper Lee", "D. Jane Goodall"],
        correctAnswer: "A. Jane Austen",
    },
    
    {
        question: "Who wrote the hit song 'Imagine' ?",
        answers: ["A. Bob Dylan", "B. Billie Holiday", "C. Elton John", "D. John Lennon"],
        correctAnswer: "D. John Lennon",
    },
    
    {
        question: "Which actor played the role of 'Spider-Man' in the recent movie trilogy?",
        answers: ["A. Tom Hanks", "B. Natasha Romanoff", "C. Steve Jobs", "D. Tom Holland"],
        correctAnswer: "D. Tom Holland",
    },
    
    {
        question: "What is the capital city of France?",
        answers: ["A. Paris", "B. Lyon", "C. Marseille", "D. Nice"],
        correctAnswer: "A. Paris",
    },
    
    {
        question: "Who was the first president of the United States?",
        answers: ["A. George Washington", "B. Thomas Jefferson", "C. Abraham Lincoln", "D. Benjamin Franklin"],
        correctAnswer: "A. George Washington",
    },
    
    {
        question: "What is the chemical symbol for water?",
        answers: ["A. H", "B. O", "C. N", "D. H2O"],
        correctAnswer: "D. H2O",
    },
];

//DOM Elements
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const resultContainer = document.getElementById("result");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-btn");
const progressNumber = document.getElementById("progress-number");
const totalQuestions = document.getElementById("total-questions");

// the default state declaration
let currentQuestionIndex = 0;
let score = 0;
totalQuestions.innerText = questions.length;

// function to display the question and answers
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;
    progressNumber.innerText = currentQuestionIndex + 1;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(button, currentQuestion.correctAnswer));
        answerButtons.appendChild(button);
        button.forEach
    });
}

// function to reset the state of the page
function resetState() {
    answerButtons.innerHTML = "";
}
// function to handle the user's answer selection and check if it's correct
function selectAnswer(button, correctAnswer) {
    button.classList.add("selected");
    setTimeout(() => {
        if (button.innerText === correctAnswer) {
            score++;
        }
        currentQuestionIndex++;
        
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResults();
        }

    }, 500);
}

// function to display the quiz results and ask the user if they want to restart
function showResults() {
    document.getElementById("quiz").classList.add("hide");
    resultContainer.classList.remove("hide");
    scoreElement.innerText = score + " / " + questions.length;
}

// event listener to restart the quiz when the user clicks the restart button
restartButton.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultContainer.classList.add("hide");
    document.getElementById("quiz").classList.remove("hide");
    showQuestion();
});

showQuestion();
