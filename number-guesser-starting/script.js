let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget(){
    let target = Math.floor(Math.random()*9)
    console.log(`Target is ${target}. Do not look here! This is cheating.`)
    return target;
}



function compareGuesses(human, computer, target){
    let humanDiff = human - target;
    console.log(`Human difference pre neg check: ${humanDiff}`)
    let computerDiff = computer - target;
    console.log(`Computer difference pre neg check: ${computerDiff}`)
    if(humanDiff < 0){
       humanDiff *= -1;
       console.log(`Human difference now positive: ${humanDiff}`)
    }
    if(computerDiff < 0){
        computerDiff *= -1
        console.log(`Computer difference now positive: ${computerDiff}`)
    }
    if(humanDiff <= computerDiff){
        console.log(`Human Wins!`)
        return true
    }else{
        console.log(`Computer Wins! You suck.`)
        return false
    }
}

function updateScore(winner){
    if(winner === 'human'){
        humanScore++;
    }else{
        computerScore++
    }
}

function advanceRound(){
    currentRoundNumber++;
}

//code to run program for admin
//let target = generateTarget();
//compareGuesses(7, 3, target);

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}