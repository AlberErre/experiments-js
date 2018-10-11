// libraries
const _ = require('lodash');
const vanillaTilt = require('vanilla-tilt');
const swal = require('sweetalert2');

VanillaTilt.init(document.querySelector(".playerContainer"), {
    max: 25,
    speed: 400,
    scale: 1.08,
});

VanillaTilt.init(document.querySelector(".cpuContainer"), {
    max: 25,
    speed: 400,
    scale: 1.08,
});

// DOM elements
const dice = document.getElementById("dice");
const button = document.getElementById("button");
const human = document.querySelector(".playerContainer");
const machine = document.querySelector(".cpuContainer");

// init variables
let started = false;
let humanNumbers = [];
let machineNumbers = [];
let gameNumbers = [];
let humanCounter = 0;
let machineCounter = 0;

//Functions

let finishGame = (_msg) => {

    let bol = swal({
        title: _msg,
        text: 'Do you want to play again?',
        type: 'warning',
        confirmButtonText: 'Yeah'
      }).then((result) => {
        if (result.value) {
            // refresh page!
            location.reload();
        }
      })

}

let checkWin = () => {

    (humanCounter >= 15 && machineCounter >= 15 ? finishGame("Tables!") : true);
    (humanCounter >= 15 ? finishGame("Human has won") : true);
    (machineCounter >= 15 ? finishGame("Machine has won") : true);
}

let randomNumber = (_event) => {
  
    // check if this is the first time you push button
    (started == false ? startGame() : true );

    // use array to avoid repeat numbers played
    let number = gameNumbers[gameNumbers.length - 1];
    gameNumbers.pop();

    dice.innerHTML = number;
    crossNumber(number);
    checkWin();
}

let crossNumber = (_number) => {

    if ( document.querySelector(`.number.n${_number}`) ) {
        let num = document.querySelectorAll(`.number.n${_number}`);

        for (let i = 0; i < num.length; i++) {
            num[i].classList.add("tachado");
        }

        // add counters based on CSS condition
        (document.querySelector(`.playerContainer .number.n${_number}`) ? humanCounter = humanCounter + 1 : true);
        console.log(humanCounter);
    
        (document.querySelector(`.cpuContainer .number.n${_number}`) ? machineCounter = machineCounter + 1 : true);
        console.log(machineCounter);
    }
}

let startGame = () => {
    started = true;
    generateCards(humanNumbers);
    generateCards(machineNumbers);
    showNumbers(humanNumbers, human);
    showNumbers(machineNumbers, machine);
}

let showNumbers = (_array, _domElement) => {

    _array.forEach((e) => {
        // create and add element in DOM
        let div = document.createElement("div");
        div.className = `number n${e}`;
        div.textContent = e;
        _domElement.appendChild(div);
    });
}

let generateCards = (_array) => {
    // generate random numbers and shuffle them
    let range = _.range(1,91);
    let shuffledRange = _.shuffle(range);

    for(let i = 0; i < 15; i++) {
        // push numbers in _array, avoiding duplicates (every one is unique)
        _array.push(shuffledRange[i]);
    }

    //mix numbers again and assign them as game numbers
    gameNumbers = _.shuffle(shuffledRange);
}

//Interactivity

button.addEventListener("click", (event) => randomNumber(event) );
//button.onclick = () => randomNumber();

