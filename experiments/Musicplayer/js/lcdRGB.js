
var lcdRGB = {
  lcdNew: function(name, place) {
    $(place).append('<div class="lcdscreen pixelated" id="'+name+'"></div>');
    for(var g=0; g<2; g++) {
      var LCDRowIndex = (g+'').length == 1 ? "0" + g : g;
      var LCDRowElement = '<div class="LCDRow" id="'+LCDRowIndex+'">';
      $(".lcdscreen#"+name).append(LCDRowElement);
      for(var h=0; h<16; h++) {
        var letterIndex = (h+'').length == 1 ? "0" + h : h;
        var letterElement = '<div class="letter" id="'+letterIndex+'">';
        $(".lcdscreen#"+name+">#"+LCDRowIndex+".LCDRow").append(letterElement);
        for(var j=0; j<8; j++) {
          var rowIndex = (j+'').length == 1 ? "0" + j : j;
          var rowElement = '<div class="letter-row" id="'+rowIndex+'"></div>';
          $(".lcdscreen#"+name+">#"+LCDRowIndex+".LCDRow>#"+letterIndex+".letter").append(rowElement);
          for(var i=0; i<5; i++) {
            var column = (i+'').length == 1 ? "0" + i : i;
            var pixel = '<div class="pixel" id="'+column+'"></div>';
           $(".lcdscreen#"+name+">#"+LCDRowIndex+".LCDRow>#"+letterIndex+".letter > #"+rowIndex+".letter-row").append(pixel);
          }
        }
      }
    }
  },
  writeLetter: function (letter,row,index,lcdID) {

    for(var i=0;i<8;i++) {
      var charRow = (i+'').length == 1 ? "0" + i : i;
      for(var j=0; j<5; j++) {
        var charColumn = (j+'').length == 1 ? "0" + j : j;
        if (letter == undefined || letter == "") 
          letter = " ";
        if (lcdRGB.letters[letter][i].charAt(j) == '1')
          $("#"+lcdID+">#"+row+".LCDRow>#"+index+".letter > #"+charRow+".letter-row > #"+charColumn+".pixel").addClass("pixel-on");
        else
          $("#"+lcdID+">#"+row+".LCDRow>#"+index+".letter > #"+charRow+".letter-row> #" +charColumn+".pixel").removeClass("pixel-on");
      }
    }
  },
  writeRow: function (lcdID,string,row){
    var max = string.length < 16 ? string.length : 16;
    row = (row+"").length == 1 ? "0"+row : row;
    for(var i=0;i<16;i++) {
      var charIndex  = (i+"").length == 1 ? "0"+i : i;
      lcdRGB.writeLetter(string.charAt(i),row,charIndex, lcdID);
    }
  },
  rotateRow: function (lcdID,string,row){
    var stringItter = string;
    lcdRGB.writeRow(lcdID,stringItter, row);
    stringItter = stringItter.substr(1,stringItter.length)
    +stringItter.substr(0, 1); 
    t = setTimeout(function () {
      lcdRGB.rotateRow(lcdID,stringItter,row)
    }, 500);
  },
  changeRGBLCDColor: function (color){
    $(".lcdscreen").addClass("LCD-blue");

  },
  blink: function (state,lcdID, row, letterIndex){
    if (state)
      $("#"+lcdID+" > #"+row).find(">#"+letterIndex).addClass("blink");
    else
      $("#"+lcdID+" > #"+row).find(">#"+letterIndex).removeClass("blink");
  },
  addCustomLetter: function (mappingChar, pixelArray) {
    var checkLength = function (element, index, array) {
      return element.length == 5;
    }
    var passed = pixelArray.every(checkLength);
    if (pixelArray.length == 8 && passed)
      lcdRGB.letters[mappingChar] = pixelArray;
  },
  letters: {
    '_': ['00000','00000','00000','00000','00000','00000','11111','00000'],
    '^': ['00100','01010','10001','00000','00000','00000','00000','00000'],
    '[': ['01110','01000','01000','01000','01000','01000','01110','00000'],
    ']': ['01110','00010','00010','00010','00010','00010','01110','00000'],
    "'": ['01100','00100','01000','00000','00000','00000','00000','00000'],
    '(': ['00010','00100','01000','01000','01000','00100','00010','00000'],
    ')': ['01000','00100','00010','00010','00010','00100','01000','00000'],
    '$': ['00100','01111','10100','01110','00101','11110','00100','00000'],
    '&': ['01100','10010','10100','01000','10101','10010','01101','00000'],
    ' ': ['00000','00000','00000','00000','00000','00000','00000','00000'],
    '@': ['01110','10001','00001','01101','10101','10101','01110','00000'],
    '/': ['00000','00001','00010','00100','01000','10000','00000','00000'],
    '%': ['11000','11001','00010','00100','01000','10011','00011','00000'],
    '+': ['00000','00100','00100','11111','00100','00100','00000','00000'],
    '-': ['00000','00000','00000','11111','00000','00000','00000','00000'],
    '.': ['00000','00000','00000','00000','00000','00000','01100','01100'],
    ',': ['00000','00000','00000','00000','00000','01100','00100','01000'],
    ':': ['00000','00000','01000','00000','01000','00000','00000','00000'],
    '"': ['01010','01010','00000','00000','00000','00000','00000','00000'],
    '!': ['00100','00100','00100','00100','00100','00000','00100','00000'],
    '?': ['01110','10001','10001','00010','00100','00000','00100','00000'],
    '*': ['00000','00100','10101','01110','10101','00100','00000','00000'],
    '#': ['01010','01010','11111','01010','11111','01010','01010','00000'],
    '<': ['00010','00100','01000','10000','01000','00100','00010','00000'],
    '>': ['01000','00100','00010','00001','00010','00100','01000','00000'],
    '=': ['00000','00000','11111','00000','11111','00000','00000','00000'],
    0: ['01110','10001','10011','10101','11001','10001','01110','00000'],
    1: ['00100','01100','00100','00100','00100','00100','01110','00000'],
    2: ['01110','10001','00001','00010','00100','01000','11111','00000'],
    3: ['11111','00010','00100','00010','00001','10001','01110','00000'],
    4: ['00010','00110','01010','10010','11111','00010','00010','00000'],
    5: ['11111','10000','11110','00001','00001','10001','01110','00000'],
    6: ['00110','01000','10000','11110','10001','10001','01110','00000'],
    7: ['11111','00001','00010','00100','01000','01000','01000','00000'],
    8: ['01110','10001','10001','01110','10001','10001','01110','00000'],
    9: ['01110','10001','10001','01111','00001','00010','01100','00000'],
    A: ['01110','10001','10001','10001','11111','10001','10001','00000'],
    B: ['11110','10001','10001','11110','10001','10001','11110','00000'],
    C: ['01110','10001','10000','10000','10000','10001','01110','00000'],
    D: ['11100','10010','10001','10001','10001','10010','11100','00000'],
    E: ['11111','10000','10000','11110','10000','10000','11111','00000'],
    F: ['11111','10000','10000','11110','10000','10000','10000','00000'],
    G: ['01110','10001','10000','10111','10001','10001','01111','00000'],
    H: ['10001','10001','10001','11111','10001','10001','10001','00000'],
    I: ['01110','00100','00100','00100','00100','00100','01110','00000'],
    J: ['00111','00010','00010','00010','00010','10010','01100','00000'],
    K: ['10001','10010','10100','11000','10100','10010','10001','00000'],
    L: ['10000','10000','10000','10000','10000','10000','11111','00000'],
    M: ['10001','11011','10101','10101','10001','10001','10001','00000'],
    N: ['10001','10001','11001','10101','10011','10001','10001','00000'],
    O: ['01110','10001','10001','10001','10001','10001','01110','00000'],
    P: ['11110','10001','10001','11110','10000','10000','10000','00000'],
    Q: ['01110','10001','10001','10001','10101','10010','01101','00000'],
    R: ['11110','10001','10001','11110','10100','10010','10001','00000'],
    S: ['01110','10001','10000','01110','00001','10001','01110','00000'],
    T: ['11111','00100','00100','00100','00100','00100','00100','00000'],
    U: ['10001','10001','10001','10001','10001','10001','01110','00000'],
    V: ['10001','10001','10001','10001','10001','01010','00100','00000'],
    W: ['10001','10001','10001','10001','10101','10101','11011','00000'],
    X: ['10001','10001','01010','00100','01010','10001','10001','00000'],
    Y: ['10001','10001','10001','01110','00100','00100','00100','00000'],
    Z: ['11111','00001','00010','00100','01000','10000','11111','00000'],
    a: ['00000','00000','01110','00001','01111','10001','01111','00000'],
    b: ['10000','10000','10110','11001','10001','10001','11110','00000'],
    c: ['00000','00000','01110','10000','10000','10001','01110','00000'],
    d: ['00001','00001','01101','10011','10001','10001','01111','00000'],
    e: ['00000','00000','01110','10001','11111','10000','01110','00000'],
    f: ['00110','01001','01000','11100','01000','01000','01000','01000'],
    g: ['00000','01111','10001','10001','01111','00001','01110','00000'],
    h: ['10000','10000','10110','11001','10001','10001','10001','00000'],
    i: ['00100','00000','01100','00100','00100','00100','01110','00000'],
    j: ['00010','00000','00110','00010','00010','10010','01100','00000'],
    k: ['10000','10000','10010','10100','11000','10100','10010','00000'],
    l: ['01100','00100','00100','00100','00100','00100','01110','00000'],
    m: ['00000','00000','11010','10101','10101','10001','10001','00000'],
    n: ['00000','00000','10110','11001','10001','10001','10001','00000'],
    o: ['00000','00000','01110','10001','10001','10001','01110','00000'],
    p: ['00000','00000','11110','10001','11110','10000','10000','00000'],
    q: ['00000','00000','01101','10011','01111','00001','00001','00000'],
    r: ['00000','00000','10110','11001','10000','10000','10000','00000'],
    s: ['00000','00000','01110','10000','01110','00001','11110','00000'],
    t: ['01000','01000','11100','01000','01000','01001','00110','00000'],
    u: ['00000','00000','10001','10001','10001','10011','01101','00000'],
    v: ['00000','00000','10001','10001','10001','01010','00100','00000'],
    w: ['00000','00000','10001','10101','10101','10101','01010','00000'],
    x: ['00000','00000','10001','01010','00100','01010','10001','00000'],
    y: ['00000','00000','10001','10001','01111','00001','01110','00000'],
    z: ['00000','00000','11111','00010','00100','01000','11111','00000']
  }
};