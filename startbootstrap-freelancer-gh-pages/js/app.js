// var quizbank = []; Populated in triviaQustions.js
console.log(quizbank);
var currentQuizQuestions = [];
var numQuestionsPerQuiz = 10;
var quizNum = 1;
var time = 10;

$(document).ready(function () {
    // var startButton = $("<button>").text("Start Quiz").attr("id", "play");
    // $("#playDiv").append(startButton);



    // If start button is pressed then generate questions, displayQuizScreen(), then start the timer.
    //This is a dynamically added element so you can't use jquery normal like that.
    $("#start").on("click", function (e) {

        // Show Questions.
        for (let i = 0; i < numQuestionsPerQuiz; i++) {
            // var questionDiv = $("<div>");
            let questionsDiv = $("#questionsDiv");
            // questionsDiv
            var questionParagraph = $("<p>").text(quizbank[i].question);
            // var trueButton = $("<button>").text("True");
            // var falseButton = $("<button>").text("False");

            //      <div class="radio">
            //          <label><input type="radio" name="optradio" checked>Option 1</label>
            //      </div>
            //      <div class="radio">
            //          <label><input type="radio" name="optradio">Option 2</label>
            //      </div>
            questionsDiv.append(questionParagraph);
            var tfRadioBtns = $('<div class="btn-group btn-group-toggle questionDiv" data-toggle="buttons"><label class="btn btn-secondary active trueFalse" id="q' + i + 'true' + '" data-question-number="' + i + '" data-answer="1" ><input type="radio" name="options" autocomplete="off">True</label><label class="btn btn-secondary trueFalse" id="q' + i + 'false' + '" data-question-number="' + i + '" data-answer="0"><input type="radio" name="options" autocomplete="off">False</label></div>');
            // var falseRadioBtn = $('<div class="radio"><label><input>FALSE</input></div>');

            //             <div class="btn-group btn-group-toggle" data-toggle="buttons">
            //   <label class="btn btn-secondary active">
            //     <input type="radio" name="options" id="option1" autocomplete="off" checked> Active
            //   </label>
            //   <label class="btn btn-secondary">
            //     <input type="radio" name="options" id="option2" autocomplete="off"> Radio
            //   </label>
            //   <label class="btn btn-secondary">
            //     <input type="radio" name="options" id="option3" autocomplete="off"> Radio
            //   </label>
            // </div>

            // var falseRadioBtn = $('<input type="radio" name="q' + i + '" />');
            tfRadioBtns.appendTo(questionsDiv);
            // falseRadioBtn.appendTo(questionsDiv);
            // questionDiv.append(trueButton);
            // questionDiv.append(falseButton);
            // $("#questionsDiv").append(questionDiv);
        }

        // console.log($(".trueFalse"));

        // because these are dynamically created buttons.
        $(".trueFalse").on("click", function (e) {
            // $("document").on("click", "input", function () { //<-- You will use this a lot probably.
            console.log(this);
            console.log($(this));
            var questionNumber = $(this).attr("data-question-number");
            var answer = $(this).attr("data-answer");
            console.log("You answered " + answer + " to question " + questionNumber + ".");
            if (answer === "1") {
                answer = true;
            } else {
                answer = false;
            }
            quizbank[questionNumber].userAnswer = answer;

        });

        var interval = setInterval(function () {
                console.log("Running setInterval");
                time--;
                $("#timer").text(time + " Seconds Remaining.");

                if (time === 0) {
                    // Get quiz entries.
                    console.log(quizbank);

                    // Determine score.
                    let score = 0;
                    // $.each(quizbank, function () {
                    for (let i = 0; i < numQuestionsPerQuiz; i++) {
                        if (quizbank[i].answer === quizbank[i].userAnswer) {
                            score += 10;
                        }
                    };

                    $("#score").append("<h2>Your Score is " + score + "%</h2>");
                    // Show score.
                    // Remove timer.
                    clearInterval(interval);


                }
            },
            1000);
    });



});

function displayStartScreen() {

    // Show start button.

    // Remove any questions.

}

function generateQuestions(quizNum) {

    // Choose three random questions from quizbank.
    var startingQuestionIndex = (quizNum - 1) * numQuestionsPerQuiz;
    var endingQuestionIndex = startingQuestionIndex + numQuestionsPerQuiz - 1;
    currentQuizQuestions = quizbank.slice(startingQuestionIndex, endingQuestionIndex);
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