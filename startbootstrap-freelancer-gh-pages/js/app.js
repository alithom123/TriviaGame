var quizbank = [];
var currentQuizQuestions = [];
var numQuestionsPerQuiz = 3;
var quizNum = 1;

function QA(question, answer) {
    this.question = question;
    this.answer = answer;
}

quizbank.push(QA("Golden Girls first aired in 1971.", false));
quizbank.push(QA("Walter White is the main character in the show 'Better Call Saul.'", false));
quizbank.push(QA("George Washington's middle name was Walter.", false));
quizbank.push(QA("Bob Dylan's real name is Robert Zimmerman.", true));

$( document ).ready( function() {


    // Put questions onto the page.

    // If start button is pressed then generate questions, displayQuizScreen(), then start the timer.

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

