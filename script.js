var scores = document.querySelector('.scores');
var timer = document.querySelector('.timer');
var time = document.querySelector('#time');
var startDiv = document.querySelector('#start-div');
var startButton = document.querySelector('#start');
// question1
var question1 = document.querySelector('#question1');
var rightButton1 = document.querySelector('.question-options1');
var wrongButton1 = document.querySelector('.question-options1');
// question2
var question2 = document.querySelector('#question2');
var rightButton2 = document.querySelector('.question-options2');
var wrongButton2 = document.querySelector('.question-options2');
// question3
var question3 = document.querySelector('#question3');
var rightButton3 = document.querySelector('.question-options3');
var wrongButton3 = document.querySelector('.question-options3');
// question4
var question4 = document.querySelector('#question4');
var rightButton4 = document.querySelector('.question-options4');
var wrongButton4 = document.querySelector('.question-options4');
// question5
var question5 = document.querySelector('#question5');
var rightButton5 = document.querySelector('.question-options5');
var wrongButton5 = document.querySelector('.question-options5');
// answers
var rightAnswer = document.querySelector('#right-answer');
var wrongAnswer = document.querySelector('#wrong-answer');
// game over
var gameOverDiv = document.querySelector('#game-over');
var score = document.querySelector('#score');
var initials = document.querySelector('#initials');
var submitButton = document.querySelector('#submit');
var playAgain = document.querySelector('#play-again');
// result
var results = document.querySelector('#results');
var highScoreDiv = document.querySelector('#high-score-div');
var firstPlace = document.querySelector('#first-place');
var secondPlace = document.querySelector('#second-place');
var thirdPlace = document.querySelector('#third-place');
var fourthPlace = document.querySelector('#fourth-place');
var fifthPlace = document.querySelector('#fifth-place');
var mainPageDiv = document.querySelector('#go-main-div');
var mainPageButton = document.querySelector('#go-main');

var timeLeft = 75;
var highScores = [];
var gameOver;
var timeInterval;

gameOverDiv.style.display = 'none';
question1.style.display = 'none';
question2.style.display = 'none';
question3.style.display = 'none';
question4.style.display = 'none';
question5.style.display = 'none';
rightAnswer.style.display = 'none';
wrongAnswer.style.display = 'none';
mainPageDiv.style.display = 'none';
results.style.display = 'none';

function setTime(){
  timeInterval = setInterval(function(){
    secondsLeft--;
    time.textContent = secondsLeft;
    gameOver = false;
    if (secondsLeft < 0){
      clearInterval(timerInterval);
      alert('You ran out of time!')
    }else if (gameOver === true){
      clearInterval(timerInterval);
    }
  }, 1000);
}

function startQuiz(){
  event.preventDefault();
  secondsLeft = 75;
  setTime();
  gameOverDiv.style.display = 'none';
  startDiv.style.display = 'none';
  scores.style.display = 'none';
  timer.style.display = 'block';
  question1.style.display = 'block';
}
// Question 1
function rightAnswerFunction1(event){
  if (event.target.matches('#right1')){
    renderCorrect();
    question1.style.display = 'none';
    question2.style.display = 'block';
  }
}

function wrongAnswerFunction1(event){
  if (event.target.matches('.wrong1')){
    renderIncorrect();
    question1.style.display = 'none';
    question2.style.display = 'block';
    secondsLeft = secondsLeft - 15;
  }
}

// Question 2

function rightAnswerFunction2(event){
  if (event.target.matches('#right2')){
    renderCorrect();
    question2.style.display = 'none';
    question3.style.display = 'block';
  }
}

function wrongAnswerFunction2(event){
  if (event.target.matches('.wrong2')){
    renderIncorrect();
    question2.style.display = 'none';
    question3.style.display = 'block';
    secondsLeft = secondsLeft - 15;
  }
}

// Question 3

function rightAnswerFunction3(event){
  if (event.target.matches('#right3')){
    renderCorrect();
    question3.style.display = 'none';
    question4.style.display = 'block';
  }
}

function wrongAnswerFunction3(event){
  if (event.target.matches('.wrong3')){
    renderIncorrect();
    question3.style.display = 'none';
    question4.style.display = 'block';
    secondsLeft = secondsLeft - 15;
  }
}

// Question 4

function rightAnswerFunction4(event){
  if (event.target.matches('#right4')){
    renderCorrect();
    question4.style.display = 'none';
    question5.style.display = 'block';
  }
}

function wrongAnswerFunction4(event){
  if (event.target.matches('.wrong4')){
    renderIncorrect();
    question4.style.display = 'none';
    question5.style.display = 'block';
    secondsLeft = secondsLeft - 15;
  }
}

// Question 5

function rightAnswerFunction5(event){
  if (event.target.matches('#right5')){
    gameOverFunction();
  }
}

function wrongAnswerFunction5(event){
  if (event.target.matches('.wrong5')){
    gameOverFunction();
  }
}

function gameOverFunction (){
    question5.style.display = 'none';
    wrongAnswer.style.display = 'none';
    rightAnswer.style.display = 'none';
    gameOverDiv.style.display = 'block';
    score.textContent = secondsLeft;
    gameOver = true;
    clearInterval(timeInterval);
  }

  function submitFunction(event){
    event.preventDefault();
    var highScore = {
      score: secondsLeft,
      initial: initials.value.trim()
    };
    if (event.target.matches('#submit')){
      if (initials.value.length < 2){
        alert("Please input at least two character")
        return;
      }
      console.log(highScore);
      highScores.push(highScore);
      localStorage.setItem('highScore', JSON.stringify(highScore));
      var lastUsers = JSON.parse(localStorage.getItem('highScore'));
      console.log(lastUsers + '1');
      gameOverDiv.style.display = 'none';
      wrongAnswer.style.display = 'none';
      rightAnswer.style.display = 'none';
      mainPageDiv.style.display = 'block';
      results.style.display = 'block';
      highScores.sort(function(a,b){
        return b.score - a.score
      });
      highScoreDiv.innerHTML = '';
      console.log(highScores);
      for (var i = 0; i < lastUsers.length; i++ ){
        var br = document.createElement('br');
        var liScore = lastUsers[i].score;
        var liInitials = lastUsers[i].initial;

        console.log(liScore);
        console.log(liInitials);
        highScoreDiv.append(liInitials);
        highScoreDiv.append(' - ' + liScore),
        highScoreDiv.append(br);
        highScoreDiv.style.display = 'block';
      }
      viewHighScoresFunction();
    }
  }
  
  function viewHighScoresFunction(event){
    results.style.display = 'block';
    mainPageDiv.style.display = 'block';
    gameOverDiv.style.display = 'none';
    question1.style.display = 'none';
    question2.style.display = 'none';
    question3.style.display = 'none';
    question4.style.display = 'none';
    question5.style.display = 'none';
    rightAnswer.style.display = 'none';
    wrongAnswer.style.display = 'none';
    startDiv.style.display = 'none';
    timer.style.display = 'none';
  }

  function mainPageFunction(){
    startDiv.style.display = 'block';
    scores.style.display = 'block';
    gameOverDiv.style.display = 'none';
    question1.style.display = 'none';
    question2.style.display = 'none';
    question3.style.display = 'none';
    question4.style.display = 'none';
    question5.style.display = 'none';
    rightAnswer.style.display = 'none';
    wrongAnswer.style.display = 'none';
    results.style.display = 'none';
    mainPageDiv.style.display = 'none';
    secondsLeft = 75;
    gameOver = true;
  }

  function renderCorrect(){
    rightAnswer.style.display = 'block';
    wrongAnswer.style.display = 'none';
  }

  function renderIncorrect(){
    rightAnswer.style.display = 'none';
    wrongAnswer.style.display = 'block';
  }


  // Event Listeners

  startButton.addEventListener('click', startQuiz);
  wrongButton1.addEventListener('click', wrongAnswerFunction1);
  rightButton1.addEventListener('click', rightAnswerFunction1);
  wrongButton2.addEventListener('click', wrongAnswerFunction2);
  rightButton2.addEventListener('click', rightAnswerFunction2);
  wrongButton3.addEventListener('click', wrongAnswerFunction3);
  rightButton3.addEventListener('click', rightAnswerFunction3);
  wrongButton4.addEventListener('click', wrongAnswerFunction4);
  rightButton4.addEventListener('click', rightAnswerFunction4);
  wrongButton5.addEventListener('click', wrongAnswerFunction5);
  rightButton5.addEventListener('click', rightAnswerFunction5);
  submitButton.addEventListener('click',submitFunction);
  playAgain.addEventListener('click', startQuiz);
  scores.addEventListener('click', viewHighScoresFunction);
  mainPageButton.addEventListener('click', mainPageFunction);