// Attribution:

// JavaScript implementation by Stack Overflow user bryc
// User profile: https://stackoverflow.com/users/815680/bryc
// Source: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript/47593316#47593316
// Stack OVerflow licenses: https://stackoverflow.com/help/licensing
// This implementation subject to CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/
// No changes were made.

// sfc32 was designed by Chris Doty-Humphrey
// sfc32 is Public Domain: http://pracrand.sourceforge.net/license.txt

function sfc32(a, b, c, d) {
    return function() {
      a >>>= 0; b >>>= 0; c >>>= 0; d >>>= 0; 
      let t = (a + b) | 0;
      a = b ^ b >>> 9;
      b = c + (c << 3) | 0;
      c = (c << 21 | c >>> 11);
      d = d + 1 | 0;
      t = t + d | 0;
      c = c + t | 0;
      return (t >>> 0) / 4294967296;
    }
}
