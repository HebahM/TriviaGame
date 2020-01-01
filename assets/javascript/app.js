var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;
var timeLeft = 31;

// Timer
function timer() {
    timeLeft--;
    $("#timer").html("<p>Time Remaining: " + timeLeft + " seconds</p>");
}

// Start the game
$("#start").on("click", function () {
    $("#start").hide();
    $("#q1").removeClass("hidden");
    var countdown = setInterval(timer, 1000);
    if (timeLeft == 0) {
        clearInterval(countdown)
    };
});

// Question 1
$(".choice").on("mouseover", function () {
    $(this).addClass("highlight");
});
$(".choice").on("mouseout", function () {
    $(this).removeClass("highlight");
});
$(".correct").on("click", function () {
    $("#q1").remove();
    $("#q1Correct").removeClass("hidden");
    correctAnswers++;
});
$(".wrong").on("click", function () {
    $("#q1").remove();
    $("#q1Correct").remove();
    $("#q1Wrong").removeClass("hidden");
    wrongAnswers++;
});







// Question 2
