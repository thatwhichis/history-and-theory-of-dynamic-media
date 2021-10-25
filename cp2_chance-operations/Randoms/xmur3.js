// Attribution:

// JavaScript implementation by Stack Overflow user bryc
// User profile: https://stackoverflow.com/users/815680/bryc
// Source: https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript/47593316#47593316
// Stack OVerflow licenses: https://stackoverflow.com/help/licensing
// This implementation subject to CC BY-SA 4.0: https://creativecommons.org/licenses/by-sa/4.0/
// No changes were made.

// MurmurHash was designed by Austin Appleby
// MurmurHash is Public Domain: https://github.com/aappleby/smhasher

function xmur3(str) {
    for(var i = 0, h = 1779033703 ^ str.length; i < str.length; i++)
        h = Math.imul(h ^ str.charCodeAt(i), 3432918353),
        h = h << 13 | h >>> 19;
    return function() {
        h = Math.imul(h ^ h >>> 16, 2246822507);
        h = Math.imul(h ^ h >>> 13, 3266489909);
        return (h ^= h >>> 16) >>> 0;
    }
}
