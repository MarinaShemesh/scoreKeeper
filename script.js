var p1button= document.getElementById("p1");
var p1Score = 0;
var one = document.getElementById("one");

var p2button= document.getElementById("p2");
var p2Score = 0;
var two = document.getElementById("two");

var gameOver = false;
var winningScore = 0;
var p = document.querySelector("p");

var input = document.querySelector("input");

var reset= document.getElementById("reset");
var winningScoreDisplay = document.querySelector("p span");


p1button.addEventListener("click", function() {
  if(!gameOver) {
   p1Score ++; 
   console.log(p1Score, winningScore);
   if(p1Score === winningScore){
   one.classList.add("winner");
   gameOver = true;//cannot add anymore 
   }
    one.innerHTML = p1Score;
  }
   
});

p2button.addEventListener("click", function() {
  if(!gameOver) {
    p2Score ++;

    if (p2Score === winningScore){
      two.classList.add("winner");
      gameOver = true;
    }
     two.textContent = p2Score;
  }
 
});

reset.addEventListener("click", function(){
  resetScore();
 });

function resetScore(){
  p1Score = 0;
  p2Score = 0;
  one.textContent = 0;
  two.textContent = 0;
  one.classList.remove("winner")
  two.classList.remove("winner")
  gameOver = false;
  
};

input.addEventListener("change", function(){
 winningScoreDisplay.textContent = input.value;
 winningScore = Number(input.value);
 resetScore();

});