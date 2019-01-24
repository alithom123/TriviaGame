var quizbank = [];
var currentQuizQuestions = [];
var numQuestionsPerQuiz = 3;
var quizNum = 1;
var time = 30;

function QA(question, answer) {
    this.question = question;
    this.answer = answer;
}

quizbank.push(new QA("Golden Girls first aired in 1971.", false));
quizbank.push(new QA("Walter White is the main character in the show 'Better Call Saul.'", false));
quizbank.push(new QA("George Washington's middle name was Walter.", false));
quizbank.push(new QA("Bob Dylan's real name is Robert Zimmerman.", true));

var qaTest = new QA("testquestion", true);
console.log(qaTest);
console.log(quizbank);

$( document ).ready( function() {


    var startButton = $("<button>").text("Start Quiz").attr("id","play");
    $("#playDiv").append(startButton);

    // Put questions onto the page.

    for(let i=0; i<numQuestionsPerQuiz; i++) {
        var questionDiv = $("<div>");
        var questionParagraph = $("<p>").text(quizbank[i].question);
        var trueButton = $("<button>").text("True");
        var falseButton = $("<button>").text("False");
        questionDiv.append(questionParagraph);
        questionDiv.append(trueButton);
        questionDiv.append(falseButton);
        $("#questions").append(questionDiv);
    }

    // If start button is pressed then generate questions, displayQuizScreen(), then start the timer.
    //This is a dynamically added element so you can't use jquery normal like that.
    $("#play").on("click", function(e) {
        var interval = setInterval(function(){
            time--;
            $("timer").text(time);
        }, 1000);
    });

});

function displayStartScreen() {

    // Show start button.

    // Remove any questions.

}

function generateQuestions(quizNum) {

    // Choose three random questions from quizbank.
    var startingQuestionIndex = (quizNum-1) * numQuestionsPerQuiz;
    var endingQuestionIndex = startingQuestionIndex + numQuestionsPerQuiz - 1;
    currentQuizQuestions = quizbank.slice( startingQuestionIndex, endingQuestionIndex);
    quizNum++;
    return currentQuizQuestions;
    
}

function displayQuizScreen() {

    //
}

function submitQuiz() {

    // Gather answers and determine score.

    // displayGradeScreen()


}

function timeoutQuiz() {

    // Set answers to none and determine score.
    
    // displayGradeScreen()

}

