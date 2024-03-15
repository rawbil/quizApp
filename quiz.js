const questions = [
    {
        question: "Which is the larget animal in the world?",
        answers: [
          {
             text: "Shark",
             correct: false
          }, 
          {
             text: "Blue whale",
             correct: true
          },
          {
             text: "Elephant",
             correct: false
          },
          {
             text: "Giraffe",
             correct: false
          }
        ]
    },
 
    {
       question: "Which is the smallest country in the world?",
       answers: [
         {
            text: "Vatican City",
            correct: true
         }, 
         {
            text: "Bhutan",
            correct: false
         },
         {
            text: "Nepal",
            correct: false
         },
         {
            text: "Sri Lankka",
            correct: false
         }
       ]
   },
 
    {
        question: "Which is the larget desert in the world?",
        answers: [
          {
             text: "Kalahari",
             correct: false
          }, 
          {
             text: "Gobi",
             correct: false
          },
          {
             text: "Sahara",
             correct: true
          },
          {
             text: "Antarctica",
             correct: false
          }
        ]
    },
 
    {
        question: "Which is the larget continent in the world?",
        answers: [
          {
             text: "Asia",
             correct: true
          }, 
          {
             text: "Australia",
             correct: false
          },
          {
             text: "Arctic",
             correct: false
          },
          {
             text: "Africa",
             correct: false
          }
        ]
    }
 ];
 
 let questionElement = document.getElementById("question");
 let answerButton = document.getElementById("answer-buttons");
 let nextButton = document.getElementById("next-btn");
 
 let currentQuestionIndex = 0;
 let score = 0;
 
 function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
 }
 
 function showQuestion() {
    resetState();
    
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+ 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion["question"];
    currentQuestion["answers"].forEach(answer => {
       const button = document.createElement("button");
       button.innerHTML = answer.text;
       button.classList.add("btn");
       answerButton.appendChild(button);
       if(answer.correct) {
        button.dataset.correct = answer.correct;
       }
       button.addEventListener("click", (e) => {
        if(e.target.dataset.correct === "true") {
            e.target.classList.add("correct");
            score++;
        }
        else{
            e.target.classList.add("incorrect");
        }
        selectAnswer();
       });
       
    })
 }
 
 function resetState() {
    nextButton.style.display = "none";
    while(answerButton.firstChild) {
       answerButton.removeChild(answerButton.firstChild);
    }
 }

 function selectAnswer() {
    Array.from(answerButton.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    })
    nextButton.style.display = "block";
 }

 /* function selectAnswer(e) {
    const selectBtn= e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if(isCorrect) {
        selectBtn.classList.add("correct");
    }
    selectBtn.classList.add("incorrect");
 } */

 nextButton.addEventListener("click", () => {
    if(currentQuestionIndex  < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
 })
 function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
 }

 function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
 }
 startQuiz();