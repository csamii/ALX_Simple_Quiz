function checkAnswer() {
    const correctAnswer = 4;
    const feedback = document.getElementById("feedback");
    const  userAnswer =  Number(document.querySelector('input[name="quiz"]:checked').value);
    console.log(userAnswer)

    if (userAnswer === correctAnswer){
        feedback.textContent = "Correct! Well done.";
    } else {
        feedback.textContent = "That's incorrect. Try again!";
    }
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);