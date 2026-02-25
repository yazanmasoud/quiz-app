function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

let currentQuestion = 0;

function showQuestion() {
    let question = questions[currentQuestion];
    
    document.getElementById('question-1').innerHTML = "Frage: " + question.question;
    document.getElementById('answer-1').innerHTML = question["answer-1"];
    document.getElementById('answer-2').innerHTML = question["answer-2"];
    document.getElementById('answer-3').innerHTML = question["answer-3"];
    document.getElementById('answer-4').innerHTML = question["answer-4"];
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(0, -1)
    let selectRightAnswerNumber = question["right-answer"];
    
    let idOfRightAnswer = selectedQuestionNumber + selectRightAnswerNumber;

    
    if (question["right-answer"] == selectedQuestionNumber){
        document.getElementById(selection).classList.add('bg-success');
        
    }else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}
