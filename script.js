var startButton = document.getElementById("startButton");
var quizQuestion1 = document.getElementById("question1");
var intro = document.getElementById("openingPage");
var questionindex = 0
var quizQuestion2 = document.getElementById("question2")
var quizQuestion3 = document.getElementById("question3")
var quizQuestion4 = document.getElementById("question4")
var endPage = document.getElementById("endPage")
// when user answer question correctly index goes up 1
var questions = [
    {
        "question": "Commonly used data types do not include: ___.",
        "choice1": "strings", "choice2": "booleans", "correctAnswer": "alerts", "choice3": "numbers"
    }, {
        "question": "The condition in and if/else statement is enclosed within ___.",
        "choice1": "quotes", "choice2": "curly brackets", "correctAnswer": "parentheses", "choice3": "square brackets"
    }, {
        "question": "Arrays in Javascript can be used to store ___.",
        "choice1": "numbers and strings", "choice2": "other arrays", "choice3": "booleans", "correctAnswer": "all the above"

    }, {
        "question": "String values must be enclosed within ___ when being assigned to variables.",
        "choice1": "commas", "choice2": "curly brackets", "correctAnswer": "quotes", "choice3": "parentheses"
    },
];




function printquestions() {
    console.log(questions[questionindex]);

    document.createElement("h2");
    var questionprompt = questions[0].question;
    var question = document.createElement("h2");
    question.textContent = questionprompt;
    quizQuestion1.append(questionprompt);


    document.createElement("button");
    var choice1Btn = document.createElement("button");
    choice1Btn.textContent = questions[0].choice1;
    quizQuestion1.append(choice1Btn);
    choice1Btn.style.backgroundColor = "blueviolet";

    document.createElement("button");
    var choice2Btn = document.createElement("button");
    choice2Btn.textContent = questions[0].choice2;
    quizQuestion1.append(choice2Btn);
    choice2Btn.style.backgroundColor = "blueviolet"

    document.createElement("button");
    var correctAnswerBtn = document.createElement("button");
    correctAnswerBtn.textContent = questions[0].correctAnswer;
    quizQuestion1.append(correctAnswerBtn);
    correctAnswerBtn.style.backgroundColor = "blueviolet"

    document.createElement("button");
    var choice3Btn = document.createElement("button");
    choice3Btn.textContent = questions[0].choice3;
    quizQuestion1.append(choice3Btn);
    choice3Btn.style.backgroundColor = "blueviolet"

    correctAnswerBtn.addEventListener("click", function () {
        quizQuestion1.style.display = "none"
        quizQuestion2.style.display = "block"
    })

    document.createElement("h2");
    var questionprompt = questions[1].question;
    var question = document.createElement("h2");
    question.textContent = questionprompt;
    quizQuestion2.append(questionprompt);

    document.createElement("button");
    var choice1Btn = document.createElement("button");
    choice1Btn.textContent = questions[1].choice1;
    quizQuestion2.append(choice1Btn);
    choice1Btn.style.backgroundColor = "blueviolet";

    document.createElement("button");
    var choice2Btn = document.createElement("button");
    choice2Btn.textContent = questions[1].choice2;
    quizQuestion2.append(choice2Btn);
    choice2Btn.style.backgroundColor = "blueviolet";

    document.createElement("button");
    var correctAnswerBtn = document.createElement("button");
    correctAnswerBtn.textContent = questions[1].correctAnswer;
    quizQuestion2.append(correctAnswerBtn);
    correctAnswerBtn.style.backgroundColor = "blueviolet";

    document.createElement("button");
    var choice3Btn = document.createElement("button");
    choice3Btn.textContent = questions[1].choice3;
    quizQuestion2.append(choice3Btn);
    choice3Btn.style.backgroundColor = "blueviolet";

    correctAnswerBtn.addEventListener("click", function () {
        quizQuestion2.style.display = "none"
        quizQuestion3.style.display = "block"
    })

    document.createElement("h2");
    var questionprompt = questions[2].question;
    var question = document.createElement("h2");
    question.textContent = questionprompt;
    quizQuestion3.append(questionprompt);


    document.createElement("button");
    var choice1Btn = document.createElement("button");
    choice1Btn.textContent = questions[2].choice1;
    quizQuestion3.append(choice1Btn);
    choice1Btn.style.backgroundColor = "blueviolet";

    document.createElement("button");
    var choice2Btn = document.createElement("button");
    choice2Btn.textContent = questions[2].choice2;
    quizQuestion3.append(choice2Btn);
    choice2Btn.style.backgroundColor = "blueviolet";

    document.createElement("button");
    var choice3Btn = document.createElement("button");
    choice3Btn.textContent = questions[2].choice3;
    quizQuestion3.append(choice3Btn);
    choice3Btn.style.backgroundColor = "blueviolet";


    document.createElement("button");
    var correctAnswerBtn = document.createElement("button");
    correctAnswerBtn.textContent = questions[2].correctAnswer;
    quizQuestion3.append(correctAnswerBtn);
    correctAnswerBtn.style.backgroundColor = "blueviolet";

    correctAnswerBtn.addEventListener("click", function () {
        quizQuestion3.style.display = "none"
        quizQuestion4.style.display = "block"
    })


    document.createElement("h2");
    var questionprompt = questions[3].question;
    var question = document.createElement("h2");
    question.textContent = questionprompt;
    quizQuestion4.append(questionprompt);

    document.createElement("button");
    var choice1Btn = document.createElement("button");
    choice1Btn.textContent = questions[3].choice1;
    quizQuestion4.append(choice1Btn);
    choice1Btn.style.backgroundColor = "blueviolet";

    document.createElement("button");
    var choice2Btn = document.createElement("button");
    choice2Btn.textContent = questions[3].choice2;
    quizQuestion4.append(choice2Btn);
    choice2Btn.style.backgroundColor = "blueviolet";

    document.createElement("button");
    var correctAnswerBtn = document.createElement("button");
    correctAnswerBtn.textContent = questions[3].correctAnswer;
    quizQuestion4.append(correctAnswerBtn);
    correctAnswerBtn.style.backgroundColor = "blueviolet";

    document.createElement("button");
    var choice3Btn = document.createElement("button");
    choice3Btn.textContent = questions[3].choice3;
    quizQuestion4.append(choice3Btn);
    choice3Btn.style.backgroundColor = "blueviolet";

    correctAnswerBtn.addEventListener("click", function () {
        quizQuestion4.style.display = "none"
        endPage.style.display = "block"
    })


}














startButton.addEventListener("click", function () {
    // console.log("clicked")
    // console.log(quizcontainer)
    // console.log(intro)
    intro.style.display = "none"
    quizQuestion1.style.display = "block"
    printquestions()
    //hide intro div. 
    // show quiz
    // initialize timer

});
