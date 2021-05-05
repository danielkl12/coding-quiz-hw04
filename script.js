

//var timerEl = document.getElementById('#start-btn');
//var mainEl = document.getElementById('main');


//Timer
let timeLeftDisplay = document.querySelector("#time-left");
let timeLeft = 75;
let startBtn = document.querySelector("#start-button");

function timerFunction() {
    setInterval(function () {
      if (timeLeft <= 0) {
        clearInterval(timeLeft = 0);
      }
      timeLeftDisplay.innerHTML = timeLeft;
      timeLeft -= 1;
    }, 1000);
  }

  startBtn.addEventListener("click", timerFunction);

 
 //intro---add event listener to make start button and intro text with rules disappear

 let intro = document.getElementById("intro")
    intro.innerHTML = "Coding Quiz Rules: Timer is deducted for each incorrect answer.";

//make intro and and start button disappear when start button is clicked
 
setAttribute("display", "none").
 
 
 
 
 
 
 


//Questions

const myQuestion = [
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
            c: "RequireJS",
            d: "ESLint"

        },
        correctAnswer: "d"
    }

]


//building function to show questions on page
//html array for output






//email contact page----separate HTML file






/*document.getElementById('#start-btn').addEventListener('click', timerFunction);

function timerFunction() {


    const timeLeftDisplay = document.querySelector("#time-left")
    const startBtn = document.querySelector("#start-button")
    let timeLeft = 10;

    function countDown() {
        setInterval(function() {
            if(timeLeft <= 0 ) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1

        }, 1000)
    }

    startBtn.addEventListener('click', countDown)
}


*/






















/*var counter = 0;
function setup() {
    noCanvas();

    var timeLeft = select('#time-left');
    timeLeft.html('0');

    function timeIt() {
        counter++;
        timeLeft.html(counter);
        
    }

    setInterval(timeIt, 1000);

    startBtn.addEventListener('click', timeIt)
}

*/




/*function coundown() {
    var timeLeft = 75;

    var timeInterval = setInterval(function() {
        
        if (timeLeft > 1) {

            timerEl.textContent = timeLeft + 'seconds remaining';

            timeLeft--;
       
        } else if (timeLeft === 1) {

            timerEl.textContent = timeLeft + ' second remaining';
            timeLeft--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
            displayMessage();

            
        }
    }, 1000);
}

*/






/*document.getElementById('start-btn').addEventListener('click', timerFunction);

function timerFunction() {
    
    const timeLeftDisplay = document.querySelector('time-left')
    const startBtn = document.querySelector('start-btn')
    let timeLeft = 50;
    console.log(timeLeftDisplay);
    function countDown(){
        setInterval(function(){
            if(timeLeft <= 0 ) {
                clearInterval(timeLeft = 0)
            }
            timeLeftDisplay.innerHTML = timeLeft
            timeLeft -=1
        }, 1000)
    }

    startBtn.addEventListener('click', countDown)

}

*/



//PSEDUO CODE

//Timer----timer must subtract time for incorrect answer

//show questions----cards? separate linked pages?

//answer buttons 

//local storage for email???