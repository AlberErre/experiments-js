const randomNumber = document.querySelector(".randomNumber");

const cartonPlayer = document.querySelector(".carton");

const cartonCPU = document.querySelector(".carton2");

let currentBingoNumber = 0;
let bolasRandom = [];
let numerosPlayer = [];
let numerosCPU = [];

const playBINGO = () => {  
  //Pull last ball used and update current ball value
  currentBingoNumber = pullNextBall();
  randomNumber.innerHTML = currentBingoNumber;
  
  //Filter cards based on current ball value
  const newNumerosPlayer = numerosPlayer.filter(e => e != `<p id="player_${currentBingoNumber}"class="cartonElement">${currentBingoNumber}</p>`);
  const newNumerosCPU = numerosCPU.filter(i => i != `<p id="cpu_${currentBingoNumber}"class="cartonElement">${currentBingoNumber}</p>`);
  
  //Check if any player has won
  // .join(' ') is used to display only
  if (newNumerosPlayer.length == 0 ) {
   cartonPlayer.innerHTML = '<h1>Player has won!!</h1>';
  } else {
   cartonPlayer.innerHTML = newNumerosPlayer.join(' ');
  }
  
  if (newNumerosCPU.length == 0) {
   cartonCPU.innerHTML = '<h1>CPU has won!!</h1>';
  } else {
   cartonCPU.innerHTML = newNumerosCPU.join(' ');
  }
  
  // Update cards
  numerosPlayer = newNumerosPlayer;
  numerosCPU = newNumerosCPU;
}

const resetBINGO = () => {
  //Reset current bingo number
  currentBingoNumber = 0;
  randomNumber.innerHTML = "#";
  
  //Reset cards for each player
  const RawNumerosPlayer = createCard();
  const RawNumerosCPU = createCard();
  numerosPlayer = RawNumerosPlayer.map(o => `<p id="player_${o}"class="cartonElement">${o}</p>`);
  numerosCPU = RawNumerosCPU.map(u => `<p id="cpu_${u}"class="cartonElement">${u}</p>`);
  // .join(' ') is used to display only
  cartonPlayer.innerHTML = numerosPlayer.join(' ');
  cartonCPU.innerHTML = numerosCPU.join(' ');
  
  // Reset bolas pool
  let bolasRaw = _.range(0,90);
  let bolas = bolasRaw.map(e => e + 1);
  bolasRandom = _.shuffle(bolas);
}

const pullBola = (bola, array) => {
  let pulledArray = _.pull(array, bola);
  return pulledArray;
}

const pullNextBall = () => {
  let b = bolasRandom[0];
  let newbolasRandom = pullBola(b, bolasRandom);
  bolasRandom = newbolasRandom;
  return b;
}

const createCard = () => {
  let cartonRaw = _.range(0,90);
  let carton = cartonRaw.map(e => e + 1);
  let cartonRandom = _.shuffle(carton);
  
  let cartonFinal = [];
  
  for (let r=0;r<15;r++) {
    
    let random = Math.floor((Math.random() * 90 ));
    cartonFinal.push(cartonRandom[random]);   
  }

  return cartonFinal;
}

/*
const generateRandomNumber = () => {
  
  let random = Math.floor((Math.random() * 90 ) + 1);
  return random;
}
*/

resetBINGO();