var correctAnswers = 0;
var wrongAnswers = 0;
var unanswered = 0;

// Start the game
$("#start").on("click", function() {
    $("#start").hide();
    $("#q1").removeClass("hidden");
});

// Question 1
$(".choice").on("mouseover", function() {
    $(this).addClass("highlight");
});
$(".choice").on("mouseout", function() {
    $(this).removeClass("highlight");
});
$(".correct").on("click", function() {
    $("#q1").remove();
    $("#q1Correct").removeClass("hidden");
    correctAnswers++;
});
$(".wrong").on("click", function() {
    $("#q1").remove();
    $("#q1Correct").remove();
    $("#q1Wrong").removeClass("hidden");
    wrongAnswers++;
});

// Question 2
