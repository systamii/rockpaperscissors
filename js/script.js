let randNum;
let randInt;
let CompChoice;
let Choice;
//(A && B) || C
// let Choicelower = lowercase(Choice)

let ComputerArray = ["Rock", "Paper", "Scissors"];

$(".play").click(function () {
   $(".computerChoice").empty();
   $(".result").empty();
  randNum = Math.random() * ComputerArray.length; //choose a number from ramArray
randInt = Math.floor(randNum); //round the number chosen up or down
CompChoice = ComputerArray[randInt];
  $(".computerChoice").text(CompChoice);
  Choice = $(".input").val();
  $(".userChoice").text(Choice);
  if (Choice === "rock" && CompChoice == "Scissors") {
    $(".result").text("You Win!");
  } else if (Choice === "rock" && CompChoice == "Paper") {
    $(".result").text("You Lose!");
  } else if (Choice === "rock" && CompChoice == "Rock") {
    $(".result").text("Tie!");
  }
  
  if (Choice === "paper" && CompChoice == "Scissors") {
    $(".result").text("You Lose!");
  } else if (Choice === "paper" && CompChoice == "Paper") {
    $(".result").text("Tie!");
  } else if (Choice === "paper" && CompChoice == "Rock") {
    $(".result").text("You Win!");
  }
  
    if (Choice === "scissors" && CompChoice == "Scissors") {
    $(".result").text("Tie!");
  } else if (Choice === "scissors" && CompChoice == "Paper") {
    $(".result").text("You Win!");
  } else if (Choice === "scissors" && CompChoice == "Rock") {
    $(".result").text("You Lose!");
  }
  

});