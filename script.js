var startButton = document.getElementById("startButton");
var quizcontainer = document.getElementById("quiz");
var intro = document.getElementById("openingPage");
var questionindex = 0
// when user answer question correctly index goes up 1
var questions = [
    {
        "question1": "Commonly used data types do not include: ___",
        "choice1": "strings", "choice2": "booleans", "correctAnswer": "alerts", "choice3": "numbers"
    }, {
        "question2": "The condition in and if/else statement is enclosed within ___",
        "choice1": "quotes", "choice2" : "curly brackets", "correctAnswer": "parentheses", "choice4": "square brackets"
    }, {"question3": "Arrays in Javascript can be used to store ___",
        "choice1": "numbers and strings", "choice2": "other arrays", "choice3": "booleans", "correctAnswer": "all the above"

    }, {
        "question3": "String values must be enclosed within ___ when being assigned to variables.",
        "choice1": "commas", "choice2" : "curly brackets", "correctAnswer": "quotes", "choice4": "parentheses"
    }
];


function printquestions() {
    console.log(questions[questionindex]);

    document.createElement("h2");
    var questionprompt = questions[0].question1;
    var question1 = document.createElement("h2");
    question1.textContent = questionprompt;
    quizcontainer.append(questionprompt);

    // document.createElement("ul");
    // var list = document.createElement("ul");
    // var choices = questions[0].choice1;
    // list.textContent = choices;
    // quizcontainer.append(choices);






    document.createElement("button");
    var choice1Btn = document.createElement("button");
    choice1Btn.textContent = questions[0].choice1
    quizcontainer.append(choice1Btn);
    choice1Btn.style.backgroundColor = "blueviolet";
    choice1Btn.onmouseover.style.backgroundColor = "white";
    choice1Btn.onclick.style.backgroundColor = "grey";

}











console.log(startButton)
startButton.addEventListener("click", function () {
    console.log("clicked")
    console.log(quizcontainer)
    console.log(intro)
    intro.style.display = "none"
    quizcontainer.style.display = "block"
    printquestions()
    //hide intro div. 
    // show quiz
    // initialize timer

});
