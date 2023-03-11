// --- old code---
// var startButton = document.getElementById("startButton");
// var quizQuestion1 = document.getElementById("question1");
// var intro = document.getElementById("openingPage");

// var questionindex = 0;
// var quizQuestion2 = document.getElementById("question2");
// var quizQuestion3 = document.getElementById("question3");
// var quizQuestion4 = document.getElementById("question4");
// var endPage = document.getElementById("endPage");
 
// -----new code----
var openingPage = document.querySelector("#openingPage");
var quizPage = document.querySelector("#quizPage");
var scorePage = document.querySelector("#scorePage");
var finalScore = document.querySelector("#finalScore");
var currentQuestion = 0;
var startQuiz = document.querySelector("#startQuiz")
var question = document.querySelector(".question");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var blank = document.querySelector(".intro");
var timerClock = document.querySelector(".timer");
var timer;
var timerCount;

var questionsArray = [
    {
        question: "Commonly used data types do not include: ___.",
        answers: ["strings", "booleans", "alerts", "numbers"],
        correctIndex: 2
        
    }, {
        question: "The condition in and if/else statement is enclosed within ___.",
        answers: ["quotes", "curly brackets", "parentheses", "square brackets"],
       correctIndex: 2
    }, {
        question: "Arrays in Javascript can be used to store ___.",
        answers: ["numbers and strings", "other arrays", "booleans", "all the above"],
        correctIndex: 3
        

    }, {
        question: "String values must be enclosed within ___ when being assigned to variables.",
        answers: ["commas", "curly brackets", "quotes", "parentheses"],
        correctIndex: 2
        
    },
];

// document.getElementById('answer2').style.visibility= 'hidden';
function init(){
    timerCount = 75
    // var x = document.getElementById("answer2");
    // document.getElementById('answer2').style.visibility= 'hidden';
//    this code hides the answer2 button, but I need to figure out how to bring it back.
    // if (x.style.display === "none") {
    //   x.style.display = "block";
    // } else {
    //   x.style.display = "none";
    // }
    
};

function startGame(){
    timerCount = 75
    console.log(openingPage)
    console.log(quizPage)
    openingPage.classList.add("hidden")
    quizPage.classList.remove("hidden")
    startTimer()
    displayQuestion()
};

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
      timerCount--;
      timerClock.textContent = timerCount;
    //   if (timerCount >= 0) {
    //     // Tests if win condition is met
    //     if (isWin && timerCount > 0) {
    //       // Clears interval and stops timer
    //       clearInterval(timer);
    //       winGame();
    //     }
    //   }
    //   // Tests if time has run out
    //   if (timerCount === 0) {
    //     // Clears interval
    //     clearInterval(timer);
    //     loseGame();
    //   }
    }, 1000);
  };

  function loseTime(){

  };
  
  function displayQuestion(){
    
    questionEl.textContent = questionsArray[currentQuestion].question
    questionsArray[currentQuestion].answers.forEach(function(answer, index){
        let item = document.createElement("li")
        let answerButton = document.createElement("button")
        answerButton.setAttribute("data-answer", index )
        
        answerButton.style.backgroundColor = "blueviolet"
        answerButton.textContent = answer
        item.appendChild(answerButton)
        answersEl.appendChild(item)
        
        
    });
  
  }

  function displayResults(){
    finalScore.textContent = "Your final score is "
    quizPage.classList.add("hidden")
    scorePage.classList.remove("hidden")

    };

  function checkAnswer(event){
    let userAnswer= parseInt(event.target.dataset.answer)
    if (userAnswer === questionsArray[currentQuestion].correctIndex){
        currentQuestion++ 
        answersEl.innerHTML = ""
        if(currentQuestion >= questionsArray.length){
            // have display results function to hide other screens and shows score. make another div
            // to hide then view questions when you click start quiz hide opening page
            displayResults()
        } else{
            displayQuestion()
        }
       
    } else {
        timerCount-=5
        // currentQuestion++
        // answersEl.innerHTML = ""
        // displayQuestion()
    }

  }


//   function question2(){
//     question.textContent = "The condition in and if/else statement is enclosed within ___."
//     answer1.textContent = "quotes";
//     answer2.textContent = "curly brackets";
//     answer3.textContent = "parentheses";
//     answer4.textContent = "square brackets";
//   }

  startQuiz.addEventListener("click", startGame);

  answersEl.addEventListener("click", checkAnswer )

  init();

// ---old code---
// when user answer question correctly index goes up 1




// --- old code ---
// function printquestions() {
//     console.log(questions[questionindex]);

//     document.createElement("h2");
//     var questionprompt = questions[0].question;
//     var question = document.createElement("h2");
//     question.textContent = questionprompt;
//     quizQuestion1.append(questionprompt);


//     document.createElement("button");
//     var choice1Btn = document.createElement("button");
//     choice1Btn.textContent = questions[0].choice1;
//     quizQuestion1.append(choice1Btn);
//     choice1Btn.style.backgroundColor = "blueviolet";

//     document.createElement("button");
//     var choice2Btn = document.createElement("button");
//     choice2Btn.textContent = questions[0].choice2;
//     quizQuestion1.append(choice2Btn);
//     choice2Btn.style.backgroundColor = "blueviolet"

//     document.createElement("button");
//     var correctAnswerBtn = document.createElement("button");
//     correctAnswerBtn.textContent = questions[0].correctAnswer;
//     quizQuestion1.append(correctAnswerBtn);
//     correctAnswerBtn.style.backgroundColor = "blueviolet"

//     document.createElement("button");
//     var choice3Btn = document.createElement("button");
//     choice3Btn.textContent = questions[0].choice3;
//     quizQuestion1.append(choice3Btn);
//     choice3Btn.style.backgroundColor = "blueviolet"

//     correctAnswerBtn.addEventListener("click", function () {
//         quizQuestion1.style.display = "none"
//         quizQuestion2.style.display = "block"
//     })

//     document.createElement("h2");
//     var questionprompt = questions[1].question;
//     var question = document.createElement("h2");
//     question.textContent = questionprompt;
//     quizQuestion2.append(questionprompt);

//     document.createElement("button");
//     var choice1Btn = document.createElement("button");
//     choice1Btn.textContent = questions[1].choice1;
//     quizQuestion2.append(choice1Btn);
//     choice1Btn.style.backgroundColor = "blueviolet";

//     document.createElement("button");
//     var choice2Btn = document.createElement("button");
//     choice2Btn.textContent = questions[1].choice2;
//     quizQuestion2.append(choice2Btn);
//     choice2Btn.style.backgroundColor = "blueviolet";

//     document.createElement("button");
//     var correctAnswerBtn = document.createElement("button");
//     correctAnswerBtn.textContent = questions[1].correctAnswer;
//     quizQuestion2.append(correctAnswerBtn);
//     correctAnswerBtn.style.backgroundColor = "blueviolet";

//     document.createElement("button");
//     var choice3Btn = document.createElement("button");
//     choice3Btn.textContent = questions[1].choice3;
//     quizQuestion2.append(choice3Btn);
//     choice3Btn.style.backgroundColor = "blueviolet";

//     correctAnswerBtn.addEventListener("click", function () {
//         quizQuestion2.style.display = "none"
//         quizQuestion3.style.display = "block"
//     })

//     document.createElement("h2");
//     var questionprompt = questions[2].question;
//     var question = document.createElement("h2");
//     question.textContent = questionprompt;
//     quizQuestion3.append(questionprompt);


//     document.createElement("button");
//     var choice1Btn = document.createElement("button");
//     choice1Btn.textContent = questions[2].choice1;
//     quizQuestion3.append(choice1Btn);
//     choice1Btn.style.backgroundColor = "blueviolet";

//     document.createElement("button");
//     var choice2Btn = document.createElement("button");
//     choice2Btn.textContent = questions[2].choice2;
//     quizQuestion3.append(choice2Btn);
//     choice2Btn.style.backgroundColor = "blueviolet";

//     document.createElement("button");
//     var choice3Btn = document.createElement("button");
//     choice3Btn.textContent = questions[2].choice3;
//     quizQuestion3.append(choice3Btn);
//     choice3Btn.style.backgroundColor = "blueviolet";


//     document.createElement("button");
//     var correctAnswerBtn = document.createElement("button");
//     correctAnswerBtn.textContent = questions[2].correctAnswer;
//     quizQuestion3.append(correctAnswerBtn);
//     correctAnswerBtn.style.backgroundColor = "blueviolet";

//     correctAnswerBtn.addEventListener("click", function () {
//         quizQuestion3.style.display = "none"
//         quizQuestion4.style.display = "block"
//     })


//     document.createElement("h2");
//     var questionprompt = questions[3].question;
//     var question = document.createElement("h2");
//     question.textContent = questionprompt;
//     quizQuestion4.append(questionprompt);

//     document.createElement("button");
//     var choice1Btn = document.createElement("button");
//     choice1Btn.textContent = questions[3].choice1;
//     quizQuestion4.append(choice1Btn);
//     choice1Btn.style.backgroundColor = "blueviolet";

//     document.createElement("button");
//     var choice2Btn = document.createElement("button");
//     choice2Btn.textContent = questions[3].choice2;
//     quizQuestion4.append(choice2Btn);
//     choice2Btn.style.backgroundColor = "blueviolet";

//     document.createElement("button");
//     var correctAnswerBtn = document.createElement("button");
//     correctAnswerBtn.textContent = questions[3].correctAnswer;
//     quizQuestion4.append(correctAnswerBtn);
//     correctAnswerBtn.style.backgroundColor = "blueviolet";

//     document.createElement("button");
//     var choice3Btn = document.createElement("button");
//     choice3Btn.textContent = questions[3].choice3;
//     quizQuestion4.append(choice3Btn);
//     choice3Btn.style.backgroundColor = "blueviolet";

//     correctAnswerBtn.addEventListener("click", function () {
//         quizQuestion4.style.display = "none"
//         endPage.style.display = "block"
//     })


// }











// ---old code---


// startButton.addEventListener("click", function () {
//     // console.log("clicked")
//     // console.log(quizcontainer)
//     // console.log(intro)
//     intro.style.display = "none"
//     quizQuestion1.style.display = "block"
//     printquestions()
//     //hide intro div. 
//     // show quiz
//     // initialize timer

// });
