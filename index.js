var randomNumber1 = Math.floor(Math.random()*6)+1;
var randomNumber2 = Math.floor(Math.random()*6)+1;
var dp1 = "images/dice"+randomNumber1+".png";
var dp2 = "images/dice"+randomNumber2+".png";
document.querySelector(".plr1img").setAttribute("src", dp1);
document.querySelector(".plr2img").setAttribute("src", dp2);
if (randomNumber1 > randomNumber2){
  document.querySelector(".title").innerHTML = '<i class="fa-solid fa-flag"></i> Player 1 Wins!';
}
else if (randomNumber1 < randomNumber2){
  document.querySelector(".title").innerHTML = 'Player 2 Wins! <i class="fa-solid fa-flag"></i>';
}
else{
  document.querySelector(".title").innerHTML = '<i class="fa-solid fa-flag"></i> This a draw! <i class="fa-solid fa-flag"></i>';
}
