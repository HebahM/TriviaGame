$(document).ready(function () {
    var correctAnswers = 0;
    var wrongAnswers = 0;
    var unanswered = 0;
    var timeLeft = 5;
    var countdown;
    // var clockRunning = false;


    // Timer
    function timer() {
        $("#timer").html("<p>Time Remaining: " + timeLeft + " seconds</p>");
        timeLeft--;
        clockRunning = true;
        console.log(timeLeft)
        if (timeLeft == -1) {
            clearInterval(countdown);
            unanswered++;
            console.log("Unanswered questions: " + unanswered)
            $(".hidden").removeClass("hidden");
            $("#answerChoices").text("The correct answer is " + questions[0].correctAnswer);
            $("#response").html(questions[0].image)
        }
    };

    /*
    function stopTimer() {
    
        // DONE: Use clearInterval to stop the count here and set the clock to not be running.
        clearInterval(intervalId);
        clockRunning = false;
    }
    */


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



    // Puts the next question on the screen:
    function newQuestion(questI) {
        $("#question").append(questions[questI].question);
        //    countdown = setInterval(timer, 1000);


        for (var i = 0; i < questions[questI].answers.length; i++) {

            // Then dynamicaly generating buttons for each movie in the array.
            // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
            var a = $("<button>");
            // Adding a class
            a.addClass("answerChoice");
            // Adding a data-attribute with a value of the movie at index i
            a.attr("buttonText", questions[questI].answers[i]);
            // Providing the button's text with a value of the movie at index i
            a.text(questions[questI].answers[i]);
            // Adding the button to the HTML
            $("#answerChoices").append(a);
        }

        
        $("button").on("click", function () {
            // $("#timer").remove();
            clearInterval(countdown);
            // timeLeft = 30;
            var userChoice = $(this).text();
            $("#question").empty();
            $("#answerChoices").empty();
            $("#response").html(questions[questI].image)
            console.log(userChoice);
            if (userChoice == questions[questI].correctAnswer) {
                $("#question").text("Correct!");
                correctAnswers++;
                console.log("correct answers:" + correctAnswers)
            }
            else {
                $("#question").text("Wrong!")
                $("#answerChoices").text("The correct answer is " + questions[questI].correctAnswer);
                wrongAnswers++;
                console.log("wrong answers: " + wrongAnswers)
            }
        });

        countdown = setInterval(timer, 1000)
        

        // if (timeLeft == 0) {
        //     console.log(timeLeft);
        //     clearInterval(countdown);
        //     alert("Time's Up");
        //     // $("#timer").empty();
        //     $("#timer").text("Time's Up!");
        //     $("#answerChoices").text("The correct answer is " + questions[questI].correctAnswer);
        //     $("#response").html(questions[questI].image);
        //     unanswered++;
        // }



    }

    // Start the game:
    $("#start").on("click", function () {
        $(this).remove();
        //countdown = setInterval(timer, 1000)
        newQuestion(0);
        // delay(3000).newQuestion(1);
    })

    // if (timeLeft == 0) {
    //     console.log(timeLeft)
    //     clearInterval(countdown);
    //     $("#timer").empty();
    //     $("#timer").text("Time's Up!");
    //     $("#answerChoices").text("The correct answer is " + questions[questI].correctAnswer);
    //     $("#response").html(questions[questI].image)
    //     unanswered++;
    // }




});