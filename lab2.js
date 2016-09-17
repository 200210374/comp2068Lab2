

var PlayerUser = prompt("Player1: rock, paper or scissors");
var PlayerComp = Math.random();


if(PlayerComp < .33) {
PlayerComp = "rock";
} else if(PlayerComp < .66) {
PlayerComp = "paper";
} else {
PlayerComp = "scissors";
};


var compare = function(choice1, choice2) {
    if(choice1 === choice2) {
    return "Tie";
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        return "paper covers rock";
    } else {
        return "scissors cuts paper";
    }
}
  
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock smashes scissors";
    } else {
        return "paper covers rock";
    }
}
  
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        return "rock smashes scissors";
    } else {
        if(choice2 === "paper") {
            return "scissors cuts paper";
        }
    }
}};

compare(PlayerUser, PlayerComp);

console.log("Player: " + PlayerUser);
console.log("Computer: " + PlayerComp);
console.log("Winning gesture is or is it a tie?:  "+ compare(PlayerUser, PlayerComp));
