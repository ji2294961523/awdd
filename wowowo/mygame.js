var randomNumber=Math.floor(Math.random()*100)+1;
// console.log(randomNumber);

var guessField=document.querySelector('.guessField');//从文本框获取数 通过class来获得
 console.log(guessField);
//  console.log(guessField.Value);
var guessSubmit=document.querySelector('.guessSubmit');
//  console.log(guessSubmit);
//  console.log(guessSubmit.Value)
var guesses=document.querySelector('.guesses');
console.log(guesses)
var lastResult=document.querySelector('.lastResult');
var lowOrHi=document.querySelector('.lowOrHi');

var guessCoutn=1;//获取随机数
var resetButtom;
guessField.focus(); //获得焦点

function checkGues(){  //方法体 关键字function
    guesses.innerHTML+=guessField.value+" "; //返回输入的text文本框的内容
    guesses.style.backgroundColor="red";  //背景颜色
}
//checkGues(); //调用方法

guessSubmit.addEventListener('click',checkGues);

