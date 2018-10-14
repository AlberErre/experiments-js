const audios = [
  ["https://scummbar.com/mi2/MI1-SE/01%20-%20The%20Gold%20Guy.mp3", "Gold Guy"],
  ["https://scummbar.com/mi2/MI1-SE/20%20-%20Organ%20Prelude.mp3", "Organ Prelude"],
  ["https://scummbar.com/mi2/MI1-SE/14%20-%20Melee%20Forest.mp3", "Melee Forest"],
  ["https://scummbar.com/mi2/MI1-SE/11%20-%20The%20Voodoo%20Shop.mp3", "The Voodoo Shop"]
];

// Global variables

let currentSong = 0;
let audioLenght = audios.length;
let currentAudio = document.getElementById("audio");
let listAudio = document.getElementById("list");
//let tituloLCD = document.getElementById("lcd");
let tituloLCD = "Click to start!";

// LCD object

lcdRGB.lcdNew("lcd1", ".lcd_2");
lcdRGB.writeRow("lcd1",tituloLCD, 0);

// Funciones

const play = () => {
  let titulo = audios[currentSong][1];
  let cancion = audios[currentSong][0];
  //tituloLCD.innerHTML = titulo;
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
  //tituloLCD.innerHTML = titulo;
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
  //tituloLCD.innerHTML = titulo;
  let tituloLCD = titulo;
  currentAudio.src = cancion;
  currentAudio.play();
  lcdRGB.writeRow("lcd1",tituloLCD, 0);
}

const random = () => {
  
  let randomNumber = Math.floor((Math.random() * audioLenght ));
      
  let titulo = audios[currentSong][1];
  let cancion = audios[currentSong][0];
  //tituloLCD.innerHTML = titulo;
  let tituloLCD = titulo;
  currentAudio.src = cancion;
  currentAudio.play();
  lcdRGB.writeRow("lcd1",tituloLCD, 0);
}

const showList = () => {
  
  listAudio.classList.toggle('close-list');
  listAudio.classList.toggle('open-list');
}

const selectTrack = (e) => {
  currentSong = e;
  play();
}

// List component

clickable_musicList = []

for (let x = 0; audios.length; x++) {
    
  clickable_musicList.push(`<div><button class="button-inside-list" onClick="selectTrack(${x})">${audios[x][1]}</button></div>`);
  
  listAudio.innerHTML = listAudio.innerHTML + clickable_musicList[x]
  
}

// clickable_musicList.join('')
// Esto devuelve todo el string, a raiz d euna lista