// sound sources
const soundList = {
    "a1": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/a1.mp3",
    "a1s": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/a1s.mp3",
    "b1": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/b1.mp3",
    "c1": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/c1.mp3",
    "c1s": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/c1s.mp3",
    "c2": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/c2.mp3",
    "d1": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/d1.mp3",
    "d1s": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/d1s.mp3",
    "e1": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/e1.mp3",
    "f1": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/f1.mp3",
    "f1s": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/f1s.mp3",
    "g1": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/g1.mp3",
    "g1s": "https://rawgit.com/pffy/mp3-piano-sound/master/mp3/g1s.mp3" 
};

function keyMusic (id) {
  
  let soundURL = soundList[id];
  let audio = new Audio(soundURL);
  audio.play();
};
