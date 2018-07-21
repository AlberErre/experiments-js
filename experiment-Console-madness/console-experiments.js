// This file shows some JavaScript console experiments showing weird results, which are correct after all
// Author: Alber Erre (https://albererre.com)

////////// FIRST EXPERIMENT

// 3 < 2 < 1 is true, WTF?
console.log(3 < 2 < 1);

// explanation:
console.log(3 < 2); // --> FALSE
console.log(false < 1); // --> TRUE

// why?
Number(false); // --> 0

// Thus, 
console.log(0 < 1); // --> TRUE

// 3 < 2 < 1 == 0 < 1, which is indeed, true.


////////// SECOND EXPERIMENT