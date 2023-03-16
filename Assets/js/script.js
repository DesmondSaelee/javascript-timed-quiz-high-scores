// how to set highscores using local storage
// how to stop timer at current time. 
 
// -----new code----
var openingPage = document.querySelector("#openingPage");
var quizPage = document.querySelector("#quizPage");
var scorePage = document.querySelector("#scorePage");
var scorePageButton = document.querySelector("#scorePageButton");
var finalScore = document.querySelector("#finalScore");
var highScorePage = document.querySelector("#highScorePage");
var highscoresEl = document.querySelector("#highscores");
var clearScores = document.querySelector("#clearScores");
var currentQuestion = 0;
var startQuiz = document.querySelector("#startQuiz");
var question = document.querySelector(".question");
var questionEl = document.getElementById("question");
var answersEl = document.getElementById("answers");
var blank = document.querySelector(".intro");
var timerClock = document.querySelector(".timer");
var initialsEl = document.getElementById("initials");
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


function init(){
    timerCount = 75
  
    
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
   
      // Tests if time has run out
      if (timerCount < 1) {
        // Clears interval
        displayResults();
      }
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

  function stopCount() {
    clearInterval(timer);
    timerCount = timerCount ;
  }

  function displayResults(){
    stopCount();
    finalScore.textContent =  timerCount;
    quizPage.classList.add("hidden")
    scorePage.classList.remove("hidden")

    };



    function displayHighScores(){
        highScorePage.classList.remove("hidden");
        var userInitials = initialsEl.value;
        var highscores = []
        var userScore = finalScore.textContent ;
        var newScore = {
            score: userScore,
            initials: userInitials,
        };
        console.log(userInitials);
        console.log(userScore);
        highscores.push(newScore);
        window.localStorage.setItem("highscores", JSON.stringify(highscores));
        var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
        
        
        
        for (let index = 0; index < highscores.length; index++) {
            let item = document.createElement("li");
            item.innerHTML = highscores[index].initials + "  - " + highscores[index].score;
            highscoresEl.appendChild(item);
            
        }
        
    };

  function checkAnswer(event){
    let userAnswer= parseInt(event.target.dataset.answer)
    if (userAnswer === questionsArray[currentQuestion].correctIndex){
        currentQuestion++ 
        answersEl.innerHTML = ""
        if(currentQuestion >= questionsArray.length){
         
            displayResults()
        } else{
            displayQuestion()
        }
       
    } else {
        timerCount-=5
      
    }

  
   

  };

  function deleteScores(){
    localStorage.clear();
    window.location.reload();
  }






  startQuiz.addEventListener("click", startGame);

  answersEl.addEventListener("click", checkAnswer);
  
  scorePageButton.addEventListener("click", displayHighScores);

  clearScores.addEventListener("click", deleteScores)
  init();


