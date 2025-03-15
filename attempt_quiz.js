// Group Members:
// Ziad Hamed
// Ethan Klassan

document.addEventListener('DOMContentLoaded', function() {
    const quizDetails = document.querySelector('.quizdetails');
    const timerElement = document.createElement('div');
    timerElement.id = 'timer';
    timerElement.style.fontSize = '24px';
    timerElement.style.fontWeight = 'bold';
    timerElement.style.color = '#D32F2F';
    timerElement.style.marginTop = '10px';
    quizDetails.appendChild(timerElement);
    
    let timeLeft = 10 * 60;
    
    //update the timer display
    function updateTimer() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        
        timerElement.textContent = `Time Remaining: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        timeLeft--;
        
        if (timeLeft < 0) {
            clearInterval(timerInterval);
            window.location.href = 'leaderboard.html';
        }
    }
    
    updateTimer();
    const timerInterval = setInterval(updateTimer, 1000);
    
    let score = 0;
    let q1Answered = false;
    let q2Answered = false;
    
    const scoreElement = document.createElement('div');
    scoreElement.id = 'score';
    scoreElement.style.fontSize = '20px';
    scoreElement.style.fontWeight = 'bold';
    scoreElement.style.backgroundColor = '#e6f2ff';
    scoreElement.style.padding = '10px';
    scoreElement.style.borderRadius = '5px';
    scoreElement.style.margin = '20px auto';
    scoreElement.style.width = '200px';
    scoreElement.textContent = 'Score: 0/100';
    
    const finishButton = document.querySelector('.FinQz');
    finishButton.parentNode.parentNode.insertBefore(scoreElement, finishButton.parentNode.nextSibling);
    
    const submitButtons = document.querySelectorAll('button.ans');
    
    //first question submission
    submitButtons[0].addEventListener('click', function() {
        //selected?
        const q1Options = document.querySelectorAll('input[name="q1"]');
        let q1Selected = false;
        let q1Correct = false;
        
        q1Options.forEach(option => {
            if (option.checked) {
                q1Selected = true;
                //correct?
                if (option.value === 'Hyper Text Markup Language') {
                    q1Correct = true;
                }
            }
        });
        
        if (!q1Selected) {
            alert('Please select an answer for Question 1.');
            return;
        }
        
        if (!q1Answered) {
            if (q1Correct) {
                score += 50;
            }
            q1Answered = true;
            updateScore();
        }
        
        // disable the button after submission
        q1Options.forEach(option => {
            option.disabled = true;
        });
        this.disabled = true;
        this.textContent = 'Submitted';
    });
    
    //second question 
    submitButtons[1].addEventListener('click', function() {
        //at least one checkbox selected
        const q2Options = document.querySelectorAll('input[name="q2"]');
        let q2Selected = false;
        let correctCount = 0;
        
        q2Options.forEach(option => {
            if (option.checked) {
                q2Selected = true;
                correctCount++;
            }
        });
        
        if (!q2Selected) {
            alert('Please select at least one answer for Question 2.');
            return;
        }
        
        if (!q2Answered) {
            score += correctCount * 25;
            q2Answered = true;
            updateScore();
        }
        
        // disablw
        q2Options.forEach(option => {
            option.disabled = true;
        });
        this.disabled = true;
        this.textContent = 'Submitted';
    });
    
    function updateScore() {
        scoreElement.textContent = `Score: ${score}/100`;
    }
    
    //finish  button
    finishButton.addEventListener('click', function(e) {
        if (!q1Answered || !q2Answered) {
            e.preventDefault();
            alert('Please answer all questions before finishing the quiz.');
        }
    });
}); 