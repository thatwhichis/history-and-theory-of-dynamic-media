// KEEPING THIS LOCAL - WILL COPY INTO DROPBOX MANUALLY
// UNTIL READY TO PUSH WITH ATTRIBUTION

let randoms = [];
let randomSeeds = [];
let seed = 10;



// FROM 1: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript/47593316#47593316
function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      var t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}
var seed2 = 1337 ^ 0xDEADBEEF; // 32-bit seed with optional XOR value
// Pad seed with Phi, Pi and E.
// https://en.wikipedia.org/wiki/Nothing-up-my-sleeve_number
var rand2 = sfc32(0x9E3779B9, 0x243F6A88, 0xB7E15162, seed);
//for (var i = 0; i < 15; i++) rand2();
// END FROM 1



function setup() {
    randoms.push(random);
    randomSeeds.push(randomSeed);
    randoms.push(Math.random);
    randomSeeds.push(null);

    randoms.push(rand2);
    randomSeeds.push(null)

    for (let j = 0; j < 20; j++) {
        for (let i  = 0; i < randoms.length; i++) {
            if (randomSeeds[i] !== null) {randomSeeds[i](seed)};
            console.log(randoms[i]());
        }
    }
}
