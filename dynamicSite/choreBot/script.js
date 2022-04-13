const doorImage1 = document.getElementById('door1');

const doorImage2 = document.getElementById('door2');
const doorImage3 = document.getElementById('door3');

const botDoorPath = 'https://content.codecademy.com/projects/chore-door/images/robot.svg';

const beachDoorPath = 'https://content.codecademy.com/projects/chore-door/images/beach.svg';

const spaceDoorPath = 'https://content.codecademy.com/projects/chore-door/images/space.svg';
let numClosedDoors = 3;
let openDoor1;
let openDoor2;
let openDoor3;

const closedDoorPath = 'https://content.codecademy.com/projects/chore-door/images/closed_door.svg';

const startButton = document.getElementById('start');

let currentlyPlaying = true;

function doorChoice(){
  let random = Math.floor(Math.random()*3)
  if(random === 0){
     openDoor1 = botDoorPath;
     openDoor2 = beachDoorPath;
     openDoor3 = spaceDoorPath;
  }else if(random === 1){
    openDoor2 = botDoorPath;
    openDoor1 = spaceDoorPath;
    openDoor3 = beachDoorPath;
  }else{
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
}

function isBot(door){
  if(door.src === botDoorPath){
    return true
  }else{
    return false
  }
}

function isClicked(door){
  if(door.src === closedDoorPath){
    return false
  }else{
    return true
  }
}

function playDoor(door){
  numClosedDoors--;
  if(numClosedDoors === 0){
    gameOver('win');
  }else if(isBot(door)){
    gameOver();
  }
}

doorImage1.onclick = ()=>{
  if(!isClicked(doorImage1) && currentlyPlaying){
  doorImage1.src = openDoor1;
  playDoor(doorImage1);
  };
};

doorImage2.onclick = ()=>{
  if(!isClicked(doorImage2) && currentlyPlaying){
  doorImage2.src = openDoor2;
  playDoor(doorImage2);
  };
}

doorImage3.onclick = ()=>{
  if(!isClicked(doorImage3) && currentlyPlaying){
  doorImage3.src = openDoor3;
  playDoor(doorImage3);
  };
}

startButton.onclick = ()=>{
  if(!currentlyPlaying){
  startRound();
  };
}

function startRound(){
  doorImage1.src = closedDoorPath;
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = `let's F'n GO!`;
  currentlyPlaying = true;
  doorChoice();
}

function gameOver(status){
  if(status === 'win'){
    startButton.innerHTML = 'You win! Play again?';
  }else{
    startButton.innerHTML = 'Game Over! Play again?';
  }
  currentlyPlaying = false;
}

startRound();




