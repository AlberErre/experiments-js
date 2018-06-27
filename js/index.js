var audios = [["https://scummbar.com/mi2/MI1-SE/01%20-%20The%20Gold%20Guy.mp3", "Gold Guy"], ["https://scummbar.com/mi2/MI1-SE/20%20-%20Organ%20Prelude.mp3", "Organ Prelude"], ["https://scummbar.com/mi2/MI1-SE/14%20-%20Melee%20Forest.mp3", "Melee Forest"], ["https://scummbar.com/mi2/MI1-SE/11%20-%20The%20Voodoo%20Shop.mp3", "The Voodoo Shop"]];

// Global variables

var currentSong = 0;
var audioLenght = audios.length;
var currentAudio = document.getElementById("audio");
var listAudio = document.getElementById("list");
//let tituloLCD = document.getElementById("lcd");
var tituloLCD = "Click to start!";

// LCD object

lcdRGB.lcdNew("lcd1", ".lcd_2");
lcdRGB.writeRow("lcd1", tituloLCD, 0);

// Funciones

var play = function play() {
  var titulo = audios[currentSong][1];
  var cancion = audios[currentSong][0];
  //tituloLCD.innerHTML = titulo;
  var tituloLCD = titulo;
  currentAudio.src = cancion;
  currentAudio.play();
  lcdRGB.writeRow("lcd1", tituloLCD, 0);
};

var pause = function pause() {
  currentAudio.pause();
};

var next = function next() {
  if (currentSong > audioLenght - 2) {
    currentSong = 0;
  } else {
    currentSong = currentSong + 1;
  }

  var titulo = audios[currentSong][1];
  var cancion = audios[currentSong][0];
  //tituloLCD.innerHTML = titulo;
  var tituloLCD = titulo;
  currentAudio.src = cancion;
  currentAudio.play();
  lcdRGB.writeRow("lcd1", tituloLCD, 0);
};

var previous = function previous() {
  if (currentSong <= 0) {
    currentSong = audioLenght - 1;
  } else {
    currentSong = currentSong - 1;
  }

  var titulo = audios[currentSong][1];
  var cancion = audios[currentSong][0];
  //tituloLCD.innerHTML = titulo;
  var tituloLCD = titulo;
  currentAudio.src = cancion;
  currentAudio.play();
  lcdRGB.writeRow("lcd1", tituloLCD, 0);
};

var random = function random() {

  var randomNumber = Math.floor(Math.random() * audioLenght);

  var titulo = audios[currentSong][1];
  var cancion = audios[currentSong][0];
  //tituloLCD.innerHTML = titulo;
  var tituloLCD = titulo;
  currentAudio.src = cancion;
  currentAudio.play();
  lcdRGB.writeRow("lcd1", tituloLCD, 0);
};

var showList = function showList() {};

var selectTrack = function selectTrack(e) {
  currentSong = e;
  play();
};

// List component

clickable_musicList = [];

for (var x = 0; audios.length; x++) {

  clickable_musicList.push("<div><button class=\"button-inside-list\" onClick=\"selectTrack(" + x + ")\">" + audios[x][1] + "</button></div>");

  listAudio.innerHTML = listAudio.innerHTML + clickable_musicList[x];
}