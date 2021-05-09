
const questions = [
    {
        question: "Who invented JavaScript?",
        answers: {
            a: "Douglas Crockford",
            b: "Sheryl Sandberg",
            c: "Brendan Eich"
        },
        correctAnswer: "c"
    },

    {
        question: "Which one of these is JavaScript package manager?",
        answers: {
            a: "Node.js",
            b: "TypScript",
            c: "npm"
        },
        correctAnswer: "c"
    },

    {
        question: "Which tool can you use to ensure code quality?",
        answers: {
            a: "Angular",
            b: "jQuery",
            c: "ESLint",


        },
        correctAnswer: "c"

    },

    {
        question: "What is the name of the tool you can use for sampling CSS?",
        answers: {
            a: "CSS",
            b: "Bootstrap",
            c: "JQuery",


        },
        correctAnswer: "b"
    },


];

let questionsDiv = document.getElementById("questions");
let question = document.getElementById("question");
let buttonOne = document.getElementById("choiceone");
let buttonTwo = document.getElementById("choicetwo");
let buttonThree = document.getElementById("choicethree");
let counter = 0;
let timeLeftDisplay = document.querySelector("#time-left");
let timeLeft = 75;
let startBtn = document.querySelector("#start-button");
let questionOne = document.getElementById("question-1");
let questionTwo = document.getElementById("question-2");
let questionThree = document.getElementById("question-3");
let questionFour = document.getElementById("question-4");
let buttonQ1 = document.getElementById("1a");
let buttonQ2 = document.getElementById("1b");
let buttonQ3 = document.getElementById("1c");
let buttonQ4 = document.getElementById("1d");

//Timer
function timerFunction() {
    setInterval(function () {
        if (timeLeft <= 0) {
            clearInterval(timeLeft = 0);
        }
        timeLeftDisplay.innerHTML = timeLeft;
        timeLeft -= 1;
    }, 1000);

    questionsDiv.style.display = "block";
    showQuestions()
}

function checkAnswers() {
    //console.log("Clicked once");
    // if the clicked button represents the correct answer, yay
   if (answers===correctAnswer) {
    questions.array++;

    } else {
        return checkAnswers;
        
    }


    
    


// clicked button = event.target.id (choiceone, choicetwo, choice3)
       




// correct answer is question.correctAnswer
    counter++;
    // if counter > questions.length, don't do it
    showQuestions();

    //event.target for specific answers to questions

    }
function showQuestions() {
    console.log(" HMM", questions, counter, questions[counter]);

    console.log(questions[counter].question)
    question.innerHTML = questions[counter].question;

    console.log(questions[counter].answers.a)
    buttonOne.innerHTML = questions[counter].answers.a
    buttonOne.addEventListener("click", checkAnswers);

    console.log(questions[counter].answers.b)
    buttonTwo.innerHTML = questions[counter].answers.b
    buttonTwo.addEventListener("click", checkAnswers);

    console.log(questions[counter].answers.c)
    buttonThree.innerHTML = questions[counter].answers.c
    buttonThree.addEventListener("click", checkAnswers);

    
}
startBtn.addEventListener("click", timerFunction);







let intro = document.getElementById("intro")
intro.innerHTML = "Coding Quiz Rules: Timer is deducted for each incorrect answer.";

/*
NOTES
event. target for specific answers to questions (right and wrong)
timer deduction for incorrect answers
link to second html page with initials field----local storage


NOTES


*/
