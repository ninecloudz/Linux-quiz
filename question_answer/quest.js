document.addEventListener('DOMContentLoaded', function () {
    const answerInput = document.getElementById('answer');
    const submitButton = document.getElementById('submit');
    const resetButton = document.getElementById('reset');
    const pointsSpan = document.getElementById('pointsCount');
    const questionText = document.getElementById('questionText');

    let points = 0;
    let currentQuestion = 0;
    let wrongAnswers = [];

    const questions = [
        { question: "Who created Linux?", answer: ['linus torvalds', 'linus', 'torvalds'] },
        { question: "Name a famous Linux Distro.", answer: ['ubuntu', 'debian', 'fedora', 'centos', 'redhat'] },
        { question: "What is the inteface called between user and the kernel?", answer: ['shell'] },
        {
            question: `Which server is used with the BIND package?:
        1.shttp
        2.dns
        3.named
        4.httpd`, answer: ['dns', '2']
        }
    ]

    displayQuestion();

    function displayQuestion() {
        if (currentQuestion < questions.length) {
            questionText.textContent = questions[currentQuestion].question;
        } else {
            alert("Yayy, answered all of em")
        }
    }

    function submitAnswer() {
        const userAnswer = answerInput.value.trim().toLowerCase();
        const correctAnswers = questions[currentQuestion].answer;

        if (correctAnswers.includes(userAnswer)) {
            points++;
            pointsSpan.textContent = points;
            let index = correctAnswers.indexOf(userAnswer);
            if (index !== -1) {
                correctAnswers.splice(index, 1)
            }
        } else {
            wrongAnswers.push(currentQuestion);
        }
        currentQuestion++;

        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            if (points === questions.length) {
                alert("Yayyy")
            } else {
                currentQuestion = 0;
                for (let i = 0; i < wrongAnswers.length; i++) {
                    currentQuestion = wrongAnswers[i];
                    answerInput.value = ''
                    displayQuestion();
                    return;
                }
            }
            resetTest()
        }
        answerInput.value = '';
    }

    function resetTest() {

        currentQuestion = 0;
        points = 0;
        pointsSpan.textContent = points;

        displayQuestion()
    }

    submitButton.addEventListener('click', submitAnswer)
    answerInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            submitAnswer()
        }
    })

    resetButton.addEventListener('click', resetTest)


})






// document.addEventListener('DOMContentLoaded', function () {
//     const answerInput = document.getElementById('answer');
//     const submitButton = document.getElementById('submit');
//     const resetButton = document.getElementById('reset');
//     const pointsSpan = document.getElementById('pointsCount');
//     const questionText = document.getElementById('questionText');

//     let points = 0;
//     let currentQuestion = 0;
//     let wrongAnswers = [];

//     const questions = [
//         { question: "Who created Linux?", answer: ['linus torvalds', 'linus', 'torvalds'] },
//         { question: "Name a famous Linux Distro.", answer: ['ubuntu', 'debian', 'fedora', 'centos', 'redhat'] },
//         { question: "What is the inteface called between user and the kernel?", answer: ['shell'] },
//         {
//             question: `Which server is used with the BIND package?:
//         1.shttp
//         2.dns
//         3.named
//         4.httpd`, answer: ['dns', '2']
//         }
//     ]

//     displayQuestion();

//     function displayQuestion() {
//         if (currentQuestion < questions.length) {
//             questionText.textContent = questions[currentQuestion].question;
//         } else if (wrongAnswers.length > 0) {
//             currentQuestion = wrongAnswers.shift()
//             displayQuestion()
//         }
//         else {
//             alert("Yayy, answered all of em")
//             resetTest()
//         }
//     }

//     function submitAnswer() {
//         const userAnswer = answerInput.value.trim().toLowerCase();
//         const correctAnswers = questions[currentQuestion].answer;

//         if (correctAnswers.includes(userAnswer)) {
//             points++;
//             pointsSpan.textContent = points;
//             let index = correctAnswers.indexOf(userAnswer);
//             if (index !== -1) {
//                 correctAnswers.splice(index, 1)
//             }
//         } else {
//             wrongAnswers.push(currentQuestion);
//         }
//         currentQuestion++;

//         if (currentQuestion < questions.length) {
//             displayQuestion();
//         } else {
//             if (points === questions.length) {
//                 alert("Yayyy")
//             } else {
//                 currentQuestion = 0;
//                 for (let i = 0; i < wrongAnswers.length; i++) {
//                     currentQuestion = wrongAnswers[i];
//                     answerInput.value = ''
//                     displayQuestion();
//                     return;
//                 }
//             }
//             resetTest()
//         }
//         answerInput.value = '';
//     }

//     function resetTest() {

//         currentQuestion = 0;
//         points = 0;
//         pointsSpan.textContent = points;

//         displayQuestion()
//     }

//     submitButton.addEventListener('click', submitAnswer)
//     answerInput.addEventListener('keydown', function (event) {
//         if (event.key === 'Enter') {
//             submitAnswer()
//         }
//     })

//     resetButton.addEventListener('click', resetTest)


// })





// document.addEventListener('DOMContentLoaded', function () {
//     const answerInput = document.getElementById('answer');
//     const submitButton = document.getElementById('submit');
//     const resetButton = document.getElementById('reset');
//     const pointsSpan = document.getElementById('pointsCount');
//     const questionText = document.getElementById('questionText');

//     let points = 0;
//     let currentQuestion = 0;

//     const questions = [
//         { question: "Who created Linux?", answer: ['linus torvalds', 'linus', 'torvalds'] },
//         { question: "Name a famous Linux Distro.", answer: ['ubuntu', 'debian', 'fedora', 'centos', 'redhat'] },
//         { question: "What is the inteface called between user and the kernel?", answer: ['shell'] },
//         {
//             question: `Which server is used with the BIND package?:
//         1.shttp
//         2.dns
//         3.named
//         4.httpd`, answer: ['dns', '2']
//         }
//     ]

//     displayQuestion();

//     function displayQuestion() {
//         questionText.textContent = questions[currentQuestion].question;
//     }

//     function submitAnswer() {
//         let userAnswer = answerInput.value.trim().toLowerCase();
//         let correctAnswers = questions[currentQuestion].answer;

//         if (correctAnswers.includes(userAnswer)) {
//             points++;
//             pointsSpan.textContent = points;
//             let index = correctAnswers.indexOf(userAnswer);
//             correctAnswers.splice(index, 1)
//         } else {

//         }
//         // else {
//         //     wrongAnswers.push(currentQuestion);
//         // }
//         currentQuestion++;



//         // if (currentQuestion < questions.length) {
//         //     displayQuestion();
//         // } else {
//         //     if (points === questions.length) {
//         //         alert("Yayyy")
//         //     } else {
//         //         currentQuestion = 0;
//         //         for (let i = 0; i < wrongAnswers.length; i++) {
//         //             currentQuestion = wrongAnswers[i];
//         //             answerInput.value = ''
//         //             displayQuestion();
//         //             return;
//         //         }
//         //     }
//         //     resetTest()
//         // }
//         answerInput.value = '';
//     }

//     function resetTest() {

//         currentQuestion = 0;
//         points = 0;
//         pointsSpan.textContent = points;

//         displayQuestion()
//     }

//     submitButton.addEventListener('click', submitAnswer)
//     answerInput.addEventListener('keydown', function (event) {
//         if (event.key === 'Enter') {
//             submitAnswer()
//         }
//     })

//     resetButton.addEventListener('click', resetTest)


// })







// document.addEventListener('DOMContentLoaded', function () {
//     const answerInput = document.getElementById('answer');
//     const submitButton = document.getElementById('submit');
//     const resetButton = document.getElementById('reset');
//     const pointsSpan = document.getElementById('pointsCount');
//     const questionText = document.getElementById('questionText');

//     let points = 0;
//     let currentQuestion = 0;
//     let answeredQuestions = [];

//     const questions = [
//         { question: "Who created Linux?", answer: ['linus torvalds', 'linus', 'torvalds'] },
//         { question: "Name a famous Linux Distro.", answer: ['ubuntu', 'debian', 'fedora', 'centos', 'redhat'] },
//         { question: "What is the interface called between user and the kernel?", answer: ['shell'] },
//         { question: "Which server is used with the BIND package?", answer: ['dns'] }
//     ];

//     displayQuestion();

//     function displayQuestion() {
//         if (currentQuestion < questions.length) {
//             questionText.textContent = questions[currentQuestion].question;
//         } else if (answeredQuestions.length === questions.length) {
//             alert("Yayyy! You've passed.");
//             resetTest();
//         } else {
//             currentQuestion = 0;
//             displayQuestion();
//         }
//     }

//     function submitAnswer() {
//         const userAnswer = answerInput.value.trim().toLowerCase();
//         const correctAnswers = questions[currentQuestion].answer;

//         if (correctAnswers.includes(userAnswer) && !answeredQuestions.includes(currentQuestion)) {
//             points++;
//             pointsSpan.textContent = points;
//             answeredQuestions.push(currentQuestion);
//         }

//         currentQuestion++;
//         displayQuestion();
//         answerInput.value = '';
//     }

//     function resetTest() {
//         currentQuestion = 0;
//         points = 0;
//         pointsSpan.textContent = points;
//         answeredQuestions = [];
//         displayQuestion();
//     }

//     submitButton.addEventListener('click', submitAnswer);
//     answerInput.addEventListener('keydown', function (event) {
//         if (event.key === 'Enter') {
//             submitAnswer();
//         }
//     });

//     resetButton.addEventListener('click', resetTest);
// });






// document.addEventListener('DOMContentLoaded', function () {
//     const answerInput = document.getElementById('answer');
//     const submitButton = document.getElementById('submit');
//     const resetButton = document.getElementById('reset');
//     const pointsSpan = document.getElementById('pointsCount');
//     const questionText = document.getElementById('questionText');

//     let points = 0;
//     let currentQuestion = 0;
//     let answeredQuestions = [];
//     let wrongQuestions = [];

//     const questions = [
//         { question: "Who created Linux?", answer: ['linus torvalds', 'linus', 'torvalds'] },
//         { question: "Name a famous Linux Distro.", answer: ['ubuntu', 'debian', 'fedora', 'centos', 'redhat'] },
//         { question: "What is the interface called between user and the kernel?", answer: ['shell'] },
//         { question: "Which server is used with the BIND package?", answer: ['dns'] }
//     ];

//     displayQuestion();

//     function displayQuestion() {
//         if (currentQuestion < questions.length) {
//             questionText.textContent = questions[currentQuestion].question;
//         } else if (answeredQuestions.length === questions.length) {
//             alert("Yayyy! You've passed.");
//             resetTest();
//         } else {
//             // Repeat wrong questions until all are answered correctly
//             if (wrongQuestions.length > 0) {
//                 currentQuestion = wrongQuestions.shift();
//                 questionText.textContent = questions[currentQuestion].question;
//             } else {
//                 currentQuestion = 0;
//                 displayQuestion();
//             }
//         }
//     }

//     function submitAnswer() {
//         const userAnswer = answerInput.value.trim().toLowerCase();
//         const correctAnswers = questions[currentQuestion].answer;

//         if (correctAnswers.includes(userAnswer)) {
//             points++;
//             pointsSpan.textContent = points;
//             answeredQuestions.push(currentQuestion);
//             // Remove the question from wrongQuestions array if it's answered correctly
//             wrongQuestions = wrongQuestions.filter(q => q !== currentQuestion);
//         } else {
//             if (!wrongQuestions.includes(currentQuestion)) {
//                 wrongQuestions.push(currentQuestion);
//             }
//         }

//         currentQuestion++;
//         displayQuestion();
//         answerInput.value = '';
//     }

//     function resetTest() {
//         currentQuestion = 0;
//         points = 0;
//         pointsSpan.textContent = points;
//         answeredQuestions = [];
//         wrongQuestions = [];
//         displayQuestion();
//     }

//     submitButton.addEventListener('click', submitAnswer);
//     answerInput.addEventListener('keydown', function (event) {
//         if (event.key === 'Enter') {
//             submitAnswer();
//         }
//     });

//     resetButton.addEventListener('click', resetTest);
// });




// document.addEventListener('DOMContentLoaded', function () {
//     const answerInput = document.getElementById('answer');
//     const submitButton = document.getElementById('submit');
//     const resetButton = document.getElementById('reset');
//     const pointsSpan = document.getElementById('pointsCount');
//     const questionText = document.getElementById('questionText');

//     let points = 0;
//     let questions = [
//         { question: "Who created Linux?", answer: ['linus torvalds', 'linus', 'torvalds'] },
//         { question: "Name a famous Linux Distro.", answer: ['ubuntu', 'debian', 'fedora', 'centos', 'redhat'] },
//         { question: "What is the interface called between user and the kernel?", answer: ['shell'] },
//         { question: "Which server is used with the BIND package?", answer: ['dns'] }
//     ];

//     displayQuestion();

//     function displayQuestion() {
//         if (questions.length === 0) {
//             alert("Yayyy! You've passed.");
//             resetTest();
//         } else {
//             const currentQuestionIndex = Math.floor(Math.random() * questions.length);
//             const currentQuestion = questions[currentQuestionIndex];
//             questionText.textContent = currentQuestion.question;
//             submitButton.addEventListener('click', () => submitAnswer(currentQuestionIndex));
//         }
//     }

//     function submitAnswer(questionIndex) {
//         const userAnswer = answerInput.value.trim().toLowerCase();
//         const correctAnswers = questions[questionIndex].answer;

//         if (correctAnswers.includes(userAnswer)) {
//             points++;
//             pointsSpan.textContent = points;
//             questions.splice(questionIndex, 1); // Remove answered question from the array
//             displayQuestion(); // Display next question
//         }

//         answerInput.value = '';
//     }

//     function resetTest() {
//         points = 0;
//         pointsSpan.textContent = points;
//         questions = [
//             { question: "Who created Linux?", answer: ['linus torvalds', 'linus', 'torvalds'] },
//             { question: "Name a famous Linux Distro.", answer: ['ubuntu', 'debian', 'fedora', 'centos', 'redhat'] },
//             { question: "What is the interface called between user and the kernel?", answer: ['shell'] },
//             { question: "Which server is used with the BIND package?", answer: ['dns'] }
//         ];
//         displayQuestion();
//     }

//     resetButton.addEventListener('click', resetTest);
// });
