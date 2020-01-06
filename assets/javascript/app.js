$(document).ready(function () {
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
    var timeLeft = 5;
    //var countdown;
    var questionNumber = 0;


    // Timer
    function timer() {

        $("#timer").html("<p>Time Remaining: " + timeLeft + " seconds</p>");
        timeLeft--;
        console.log(timeLeft);

        if (timeLeft == -1) {
            clearInterval(countdown);
            unanswered++;
            //console.log("Unanswered questions: " + unanswered);
            $("#timesUp").text("Time's Up");
            $("#answerChoices").empty();
            $("#answerChoices").text("The correct answer is " + questions[questionNumber].correctAnswer);
            $("#response").html(questions[questionNumber].image);
            questionNumber++;
            setTimeout(newQuestion, 3000);
            

        };

    };

    function newQuestion() {
        if (questionNumber < 10) {
            $("#question").text(questions[questionNumber].question);
            $("#timesUp").empty();
            $("#response").empty();
            $("#answerChoices").empty();
            timeLeft = 5;
            countdown = setInterval(timer, 1000);
            for (var i = 0; i < questions[questionNumber].answers.length; i++) {
                var a = $("<button>");
                a.addClass("answerChoice");
                a.attr("buttonText", questions[questionNumber].answers[i]);
                a.text(questions[questionNumber].answers[i]);
                $("#answerChoices").append(a);
            }
        }
        else {
            $("#main").html("<h1>The Solar System</h1><p>Correct: " + correctAnswers + "</p><p> Incorrect: " + wrongAnswers + "</p><p>Unanswered: " + unanswered + "</p><button id='reset'>Reset</button>");
        };
    }

    // Question List:
    var questions = [
        {
            question: "What is the third planet from the sun?",
            answers: ["Mercury", "Earth", "Venus", "Mars"],
            correctAnswer: "Earth",
            image: "<img src='assets/images/Question1.jpg' width='500px' length='600px'>"
        },
        {
            question: "How long does it take for Earth to spin upon its axis?",
            answers: ["1 day", "1 week", "1 month", "1 year"],
            correctAnswer: "1 day",
            image: "<img src='assets/images/Question2.jpg' width='500px' length='600px'>"
        },
        {
            question: "How long does it take for Earth to orbit the sun?",
            answers: ["1 day", "1 week", "1 month", "1 year"],
            correctAnswer: "1 year",
            image: "<img src='assets/images/Question3.jpg' width='500px' length='600px'>"
        },
        {
            question: "What is the smallest planet in the Solar System?",
            answers: ["Jupiter", "Venus", "Mars", "Mercury"],
            correctAnswer: "Mercury",
            image: "<img src='assets/images/Question4.jpg' width='500px' length='600px'>"
        },
        {
            question: "What is the largest planet in the Solar System?",
            answers: ["Jupiter", "Saturn", "Uranus", "Mars"],
            correctAnswer: "Jupiter",
            image: "<img src='assets/images/Question5.jpg' width='500px' length='600px'>"
        },
        {
            question: "What planet rotates on its side?",
            answers: ["Venus", "Mars", "Uranus", "Neptune"],
            correctAnswer: "Uranus",
            image: "<img src='assets/images/Question6.jpg' width='500px' length='600px'>"
        },
        {
            question: "How many planets in our Solar System have rings?",
            answers: ["1", "2", "4", "6"],
            correctAnswer: "4",
            image: "<img src='assets/images/Question7.jpg' width='500px' length='600px'>"
        },
        {
            question: "What is the sun?",
            answers: ["A star", "A planet", "A comet", "An asteroid"],
            correctAnswer: "A star",
            image: "<img src='assets/images/Question8.jpg' width='500px' length='600px'>"
        },
        {
            question: "How many moons does Jupiter have?",
            answers: ["2", "12", "24", "67"],
            correctAnswer: "67",
            image: "<img src='assets/images/Question9.jpg' width='500px' length='600px'>"
        },
        {
            question: "What former planet was reclassified as a dwarf planet in 2006?",
            answers: ["Mercury", "Ceres", "Pluto", "Neptune"],
            correctAnswer: "Pluto",
            image: "<img src='assets/images/Question10.jpg' width='500px' length='600px'>"
        },
    ];



    /////////////////// Start the game:
    $("#start").on("click", function () {
        $(this).remove();
        //countdown = setInterval(timer, 1000)
        newQuestion();


        $(document).on("click", "#answerChoices button", function () {
            var userChoice = $(this).text();
            clearInterval(countdown);
            //timeLeft = 5;
            $("#question").empty();
            $("#answerChoices").empty();
            $("#response").html(questions[questionNumber].image);
            console.log(userChoice);
            questComplete = true;
            if (userChoice == questions[questionNumber].correctAnswer) {
                $("#question").text("Correct!");
                correctAnswers++;
                console.log("correct answers:" + correctAnswers);
                questionNumber++;
                setTimeout(newQuestion, 3000);

            }
            else {
                //alert("Wrong answer!!");
                $("#question").text("Wrong!");
                $("#answerChoices").text("The correct answer is " + questions[questionNumber].correctAnswer);
                wrongAnswers++;
                console.log("wrong answers: " + wrongAnswers);
                questionNumber++;
                setTimeout(newQuestion, 3000);

            };

        });

        
    });

    $("button").on("click", "#reset", function() {
        alert("You clicked the reset button!!")
        questionNumber = 0;
        wrongAnswers = 0;
        correctAnswers = 0;
        unanswered = 0;
        newQuestion();
    });
});

/*

 /*
        function chooseAnswer(questI) {
            // $("#timer").remove();
            // clearInterval(countdown);
            // timeLeft = 30;
    
            $("#question").empty();
            $("#answerChoices").empty();
            $("#response").html(questions[questionNumber].image)
            if (userChoice == questions[questionNumber].correctAnswer) {
                $("#question").text("Correct!");
                correctAnswers++;
                right = true;
                console.log("correct answers:" + correctAnswers)
                timeLeft = 5;
                setTimeout(newQuestion(), 3000)
            }
            else {
                $("#question").text("Wrong!")
                $("#answerChoices").text("The correct answer is " + questions[questionNumber].correctAnswer);
                wrongAnswers++;
                wrong = true;
                console.log("wrong answers: " + wrongAnswers)
                setTimeout(newQuestion(), 3000)
            }
        }*/


        /*
        function thatsRight(questI) {
            $("#question").text("Correct!");
            $("#response").html(questions[questNum].image)
        }
        function correctAnsIs(questI) {
            $("#answerChoices").text("The correct answer is " + questions[questNum].correctAnswer);
            $("#response").html(questions[questNum].image);
        };
    
        function timesUp(questI) {
            $("#answerChoices").text("The correct answer is " + questions[questNum].correctAnswer);
            $("#response").html(questions[questI].image);
        }*/

