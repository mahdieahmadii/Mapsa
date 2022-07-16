let playerOne = 0;
let playerTwo = 0;
function randomGenerator(){
  let firstNum = Math.floor(Math.random()*6 + 1);
  let secondNum = Math.floor(Math.random()*6 + 1);

  document.querySelector("#img-dice1").setAttribute("src" , `../images/${firstNum}.png`);
  document.querySelector("#img-dice2").setAttribute("src" , `../images/${secondNum}.png`);
  
  if (firstNum > secondNum && playerOne < 5){
      playerOne++ ;
      document.querySelector(".score-num1").innerHTML = playerOne;
    }
  else if(firstNum < secondNum && playerTwo < 5){
      playerTwo++ ;
      document.querySelector(".score-num2").innerHTML = playerOne;  
    }
  else if(firstNum = secondNum){
    alert("equal");
    }
}
function Reset(){
  document.querySelector(".score-num1").innerHTML = 0;
  document.querySelector(".score-num2").innerHTML = 0;
}








