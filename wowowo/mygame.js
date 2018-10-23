var randomNumber=Math.floor((Math.random()*100));
// console.log(randomNumber);

var guessField=document.querySelector('.guessField');
 console.log(guessField);
var guessField=document.querySelector('.guesses');
console.log(guesses);
var lastResult=document.querySelector('.lastResult');
var lowOrHi=document.querySelector('.lowOrHi');
var guessSubmit=document.querySelector('.guessSubmit');
 
var guessesCoutn=1;
var resetButton;
guessField.focus();

function checkGuess() //形式参数
{
 guesses.textContent += guessField.value+" ";
 guesses.style.backgroundColor="red";

}

// checkGuess();实际参数
guessSubmit.addEventListener('click',checkGuess);