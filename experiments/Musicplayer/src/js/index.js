const lcdRGB = require("./lcd");

const audios = [
  ["https://github.com/AlberErre/experiments-js/blob/master/experiments/Musicplayer/assets/awakening.mp3?raw=true", "Awakening"],
  ["https://github.com/AlberErre/experiments-js/blob/master/experiments/Musicplayer/assets/conqueror.mp3?raw=true", "Conqueror"],
  ["https://scummbar.com/mi2/MI1-SE/01%20-%20The%20Gold%20Guy.mp3", "Gold Guy"],
  ["https://scummbar.com/mi2/MI1-SE/20%20-%20Organ%20Prelude.mp3", "Organ Prelude"],
  ["https://scummbar.com/mi2/MI1-SE/14%20-%20Melee%20Forest.mp3", "Melee Forest"],
  ["https://scummbar.com/mi2/MI1-SE/11%20-%20The%20Voodoo%20Shop.mp3", "The Voodoo Shop"]
];

// DOM elements
const currentAudio = document.getElementById("audio");
const listAudio = document.getElementById("list");
const playButton = document.getElementById("play");
const previousButton = document.getElementById("previous");
const pauseButton = document.getElementById("pause");
const nextButton = document.getElementById("next");
const randomButton = document.getElementById("random");
const buttonListButton = document.querySelector(".button-list");

// init variables
let currentSong = 0;
let audioLenght = audios.length;
let tituloLCD = "Click to start!";

// LCD object
lcdRGB.lcdNew("lcd1", ".lcd_2");
lcdRGB.writeRow("lcd1",tituloLCD, 0);

// Funciones
const play = () => {
  let titulo = audios[currentSong][1];
  let cancion = audios[currentSong][0];
  let tituloLCD = titulo;
  currentAudio.src = cancion;
  currentAudio.play();
  lcdRGB.writeRow("lcd1",tituloLCD, 0);
}

const pause = () => {
  currentAudio.pause();
}

const next = () => {
  if (currentSong > audioLenght-2) {
    currentSong = 0; 
  } else {
    currentSong = currentSong + 1;  
  }
  
  let titulo = audios[currentSong][1];
  let cancion = audios[currentSong][0];
  let tituloLCD = titulo;
  currentAudio.src = cancion;
  currentAudio.play();
  lcdRGB.writeRow("lcd1",tituloLCD, 0);

}

const previous = () => {
  if (currentSong <= 0) {
    currentSong = audioLenght - 1; 
  } else {
    currentSong = currentSong - 1;  
  }
  
  let titulo = audios[currentSong][1];
  let cancion = audios[currentSong][0];
  let tituloLCD = titulo;
  currentAudio.src = cancion;
  currentAudio.play();
  lcdRGB.writeRow("lcd1",tituloLCD, 0);
}

const random = () => {
  
  let randomNumber = Math.floor((Math.random() * audioLenght ));
      
  let titulo = audios[randomNumber][1];
  let cancion = audios[randomNumber][0];
  let tituloLCD = titulo;
  currentAudio.src = cancion;
  currentAudio.play();
  lcdRGB.writeRow("lcd1",tituloLCD, 0);
}

const showList = () => {
  
  listAudio.classList.toggle('close-list');
  listAudio.classList.toggle('open-list');
}

const selectTrack = (song) => {
  currentSong = song;
  play();
}

// List component
let clickable_musicList = [];

audios.forEach((e, i) => {
    // create and add element in DOM
    let div = document.createElement("div");
    let button = document.createElement("button");
    button.className = `button-inside-list c${i}`;
    button.textContent = `${audios[i][1]}`;
    div.appendChild(button);
    listAudio.appendChild(div);
    // add function to DOM element
    document.querySelector(`.c${i}`).onclick = () => selectTrack(i);
});

// DOM interactivity
playButton.onclick = () => play();
previousButton.onclick = () => previous(); 
pauseButton.onclick = () => pause(); 
nextButton.onclick = () => next(); 
randomButton.onclick = () => random(); 
buttonListButton.onclick = () => showList(); 
