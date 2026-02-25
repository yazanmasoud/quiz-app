function init() {
    document.getElementById('all-questions').innerHTML = questions.length;
    showQuestion();
}

let currentQuestion = 0;

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('end-screen').style = "";
        document.getElementById('question-body').style = "display: none"
    } else {
        let question = questions[currentQuestion];

        document.getElementById('question-1').innerHTML = "Frage: " + question.question;
        document.getElementById('answer-1').innerHTML = question["answer-1"];
        document.getElementById('answer-2').innerHTML = question["answer-2"];
        document.getElementById('answer-3').innerHTML = question["answer-3"];
        document.getElementById('answer-4').innerHTML = question["answer-4"];
        document.getElementById('current-question-number').innerHTML = currentQuestion + 1;
    }
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let selectedId = selection.slice(0, -1);
    let selectRightAnswerNumber = question["right-answer"];
    let idOfRightAnswer = selectedId + selectRightAnswerNumber;

    if (question["right-answer"] == selectedQuestionNumber) {
        document.getElementById(selection).classList.add('bg-success');

    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    }
    document.getElementById('next-button').disabled = false;
}

function showNextQuestion() {
    currentQuestion += 1;
    document.getElementById('next-button').disabled = true;
    resetColoredAnswers();
    showQuestion();

}

function resetColoredAnswers() {

    document.getElementById('answer-1').parentNode.classList.remove('bg-danger')
    document.getElementById('answer-1').parentNode.classList.remove('bg-success')
    document.getElementById('answer-1').classList.remove('bg-success');


    document.getElementById('answer-2').parentNode.classList.remove('bg-danger')
    document.getElementById('answer-2').parentNode.classList.remove('bg-success')
    document.getElementById('answer-2').classList.remove('bg-success');

    document.getElementById('answer-3').parentNode.classList.remove('bg-danger')
    document.getElementById('answer-3').parentNode.classList.remove('bg-success')
    document.getElementById('answer-3').classList.remove('bg-success');

    document.getElementById('answer-4').parentNode.classList.remove('bg-danger')
    document.getElementById('answer-4').parentNode.classList.remove('bg-success')
    document.getElementById('answer-4').classList.remove('bg-success');
}