var dadito = document.getElementById("dadito");

var randomNumber = function randomNumber() {

  var number = Math.floor(Math.random() * 5 + 1);
  dadito.innerHTML = number;
};

// init dadito 
randomNumber();